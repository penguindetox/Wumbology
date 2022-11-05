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

    public add(m:Matrix){
        if(this.dims[0] == m.dims[0] && this.dims[1] == m.dims[1]){
            for(var i = 0; i < this.dims[0];i++){
                for(var j = 0; j< this.dims[1];j++){
                    
                }
            }
        }else{
            throw new Error("Dimension Error: The dimensions of these matrices are not equivalent to eachother.");
        }
    }

    public static add(m1:Matrix,m2:Matrix){

    }

    public static multiply(m1:Matrix,m2:Matrix){

    }
    public multiply(m:Matrix):Matrix{
        return new Matrix([]);
    }
}