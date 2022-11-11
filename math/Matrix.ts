import { Vector } from "./Vector";

export class Matrix{
    public components:number[][];
    public dims:number[];

    constructor(components:number[][]){
        this.components = components;

        if(components.length !== 0 && components[0].length != 0){
            this.dims = [components.length,components[0].length];
        }else{
            throw new Error("Dimension Error: the dimensions on the matrix have 0 values");
        }
    }

    public static Identity(){
        
    }

    public add(m:Matrix){
        if(this.dims[0] == m.dims[0] && this.dims[1] == m.dims[1]){
            let matComps:number[][] = [];
            for(var i = 0; i < this.dims[0];i++){
                let matRow = [];
                for(var j = 0; j< this.dims[1];j++){
                    matRow.push(this.components[i][j] + m.components[i][j]);
                }

                matComps.push(matRow);
            }

            return new Matrix(matComps);
        }else{
            throw new Error("Dimension Error: The dimensions of these matrices are not equivalent to eachother.");
        }
    }

    public static add(m1:Matrix,m2:Matrix){

    }

    public static mul(m1:Matrix,m2:Matrix|Vector):Matrix | Vector{
        return new Matrix([]);
    }


    public mul(m:Matrix | Vector):Matrix | Vector{
        if(m instanceof Matrix){
            if(this.dims[1] == m.dims[0]){
                let matComps:number[][] = [];

                for(var i = 0; i < this.dims[0]; i++){
                    var matRow:number[] = [];

                    for(var j = 0; j < m.dims[1]; j++){
                        var tempComponent:number = 0;
                        for(var k = 0; k < this.dims[1]; k++){
                            tempComponent += this.components[i][k] * m.components[k][j];
                        }

                        matRow.push(tempComponent);
                    }

                    matComps.push(matRow);
                    
                }

                return new Matrix(matComps);
            }
        }else if(m instanceof Vector ){
            if(this.dims[1] == m.dim){
                let tempVec:number[] = [];
                for(var i = 0; i < this.dims[0]; i++){
                    var penis = "D====>";
                    let vecComponent:number = 0;

                    for(var j = 0; j < this.dims[1]; j++){
                        vecComponent += this.components[i][j] * m.components[j];
                    }

                    tempVec.push(vecComponent);
                }

                return new Vector(tempVec);
            }
            
        }else{
            throw new Error("Not valid data type");
        }
       
        return new Matrix([]);
    }
}