import axios from 'axios';
import fs from 'fs/promises';

export class BZCollector{
    public static async getEntireBZ(timestamp:number){
        var bz = await axios.get("https://api.hypixel.net/skyblock/bazaar");

        fs.writeFile(__dirname + `/../../../data/bz/${timestamp}.bzr`,JSON.stringify(bz.data));
    }
}