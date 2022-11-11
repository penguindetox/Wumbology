import { Vector } from "../../math/Vector";
import { Optimizer } from "../Optimizer";
import fs from 'fs';

export interface SingleLinearMLDataset{
    observedX:Vector;
    observedY:Vector;

}


export class SingleLinearMLModel{
    private m:number;
    private c:number;

    public optimizer:Optimizer;
    public dataset:SingleLinearMLDataset;

    constructor(optimizer:Optimizer,dataset:SingleLinearMLDataset){
        this.optimizer = optimizer;

        this.dataset = dataset;

        this.m = Math.random() * 10;
        this.c = Math.random() * 10;
    }

    public train(learningRate:number = 0.001, epoch:number = 1000){
        let n:number = this.dataset.observedX.components.length;
        

        for(var i = 0; i < epoch; i++){
            let f:Vector = this.dataset.observedY.sub(this.dataset.observedX.mul(this.m));

            for(var j = 0; j < f.components.length;j++){
                f.components[j] += this.c;
            }


            this.m -= learningRate * ((-2/ n) * this.dataset.observedX.dot(f));

            this.c -= learningRate * ((-2 / n) * f.sum());

            if(i % (epoch / 10) == 0){
                let predictedValues = [];
                for(var j = 0; j < this.dataset.observedX.components.length; j++){
                    predictedValues.push((this.m * this.dataset.observedX.components[i]) + this.c);
                }
                
            }
        }


        return {m:this.m,c:this.c};
    }

    get line(){
        return {m:this.m, c:this.c};
    }

    public predict(xValue:number){
        return (this.m * xValue) + this.c;
    }

    public save(name:string){
        fs.writeFileSync(`./data/model/${name}.slr`,JSON.stringify({'m':this.m,'c':this.c}));
    }
    public MeanSquaredError(observed:number[],predicted:number[]){
        let total:number = 0;
        
        for(var i = 0; i < observed.length; i++){
            
            total += (observed[i] - predicted[i]) ** 2;
        }

        return total / observed.length;
    }
}