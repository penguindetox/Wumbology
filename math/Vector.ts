export class Vector{
    public components:number[];
    public dim:number;

    constructor(components:number[]){
        this.components = components;

        if(this.components.length <= 0){
            throw new Error("Dimension Error: Your vector cannot have 0 dimensions.");
        }
        this.dim = this.components.length;
    }

    public sum():number{
        let total:number = 0; 

        for(var i = 0; i < this.components.length; i++){
            total += this.components[i];
        }

        return total;
    }

    public add(v:Vector):Vector{
        let tempComponents:number[] = [];

        if(this.dim == v.dim){
            for(var i = 0; i < this.dim; i++){
                tempComponents.push(this.components[i] + v.components[i]);
            }

            return new Vector(tempComponents);
        }else{
            throw new Error("Dimension Error: The vectors you're trying to add  do not have equivalent dimensions.");
        }


    }

    public static add(v1:Vector,v2:Vector){

    }

    public mul(s:number):Vector{
        let tempComponents:number[] = [];

        try{
            for(var i = 0; i < this.components.length; i++){
                
                tempComponents.push(this.components[i] * s);
            }
        }catch(e){
            console.log(this.components.length);
        }
        


        return new Vector(tempComponents);
    }

    public static mul(v1:Vector,s:number){

    }

    public sub(v:Vector){
        let tempComponents:number[] = [];

        for(var i = 0; i < this.dim; i++){
            tempComponents.push(this.components[i] - v.components[i]);
        }

        return new Vector(tempComponents);
    }

    public dot(v:Vector):number{
        let total:number = 0; 

        if(this.dim == v.dim){
            for(var i = 0; i < this.dim; i++){
                total += this.components[i] * v.components[i];
            }

            return total;
        }else{
            throw new Error("Dimension Error: The vectors you're trying to calculate the dot product of do not have equivalent dimensions");
        }
    }


    public toArray(){
        return this.components;
    }
}