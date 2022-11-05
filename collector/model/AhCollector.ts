import axios from 'axios';
import fs from 'fs/promises';
import nbt from 'prismarine-nbt';

export class AHCollector{
    public static async getEntireAH(timestamp:number){
        var firstPage = await axios.get("https://api.hypixel.net/skyblock/auctions");
        var allPagePromises:Promise<any>[] = [];

        for(var i = 0; i < firstPage.data.totalPages- 1; i++){
            allPagePromises.push( axios.get(`https://api.hypixel.net/skyblock/auctions?page=${i}`));
        }
        
        Promise.all(allPagePromises).then(async (pages:any) =>{

            let tempBuf: any[] = [];
            let lastUpdated:number = pages[0].data.lastUpdated;

            for(var i = 0; i < pages.length; i++){
                if(pages[i].data.auctions){
                    
                    for(var j = 0; j < pages[i].data.auctions.length; j++){
                        if(pages[i].data.auctions[j].bin == true){
                            let parsed:any = await nbt.parse(Buffer.from(pages[i].data.auctions[j].item_bytes,'base64'));
                            
                            if(parsed.parsed.value.i?.value.value[0].tag.value.ExtraAttributes){
                                tempBuf.push({
                                    id:parsed.parsed.value.i?.value.value[0].tag.value.ExtraAttributes.value.id.value,
                                    price:pages[i].data.auctions[j].starting_bid,
                                    'category':pages[i].data.auctions[j].category,
                                    start:pages[i].data.auctions[j].start,
                                    end:pages[i].data.auctions[j].end
                                    
                                });
                            }

                        }

                        
                    }

                    
                }

               
            }

            fs.writeFile(__dirname + `/../../../data/ah/${timestamp}.ah`,JSON.stringify({lastupdated:lastUpdated,auctions:tempBuf}))

            tempBuf = [];
        });
    }
}