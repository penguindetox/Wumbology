import { AHCollector } from "./model/AhCollector";
import cron from 'node-cron';
import { BZCollector } from "./model/BZCollector";

cron.schedule("*/2 * * * *",() =>{
    var currentTime = Date.now();
    AHCollector.getEntireAH(currentTime);
    BZCollector.getEntireBZ(currentTime);
});