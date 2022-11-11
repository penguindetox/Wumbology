import { Matrix } from "../../math/Matrix";
import { Vector } from "../../math/Vector";
import { Optimizer } from "../Optimizer";
import fs from 'fs';

export class MultiLinearMlModel{
    private m:number[];
    private c:number[];

    public optimizer:Optimizer;
    public dataset:Vector[];

    constructor(optimizer:Optimizer,observedY: Vector,dataset:Vector[]){

        //y = mx + nz + c
        //y = mx + nz + vw + c
        this.m = [];
        this.c = [];


        this.optimizer = optimizer;
        this.dataset = dataset;
    }

    public train(learningRate:number = 0.001, epoch:number = 100){
        for(var i = 0; i < epoch; i++){

        }
    }

    public predict(values:number[]){

    }

    public save(name:string){
        fs.writeFileSync(`./data/model/${name}.mlr`,JSON.stringify({'m':this.m,'c':this.c}));
    }

}