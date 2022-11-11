import { Matrix } from "./math/Matrix";
import { Vector } from "./math/Vector";
import { SingleLinearMLModel } from "./model/linearregression/SingleLinearModel";
import { Optimizer } from "./model/Optimizer";

let x = [];
let y = [];

const m = Math.random() * 10;
const c = Math.random() * 5;

for(var i = 0; i < 100000;i++){
    x.push(i + 1);
    y.push((i + 1) * m + c);
}

const model = new SingleLinearMLModel(Optimizer.GradientDescent,{'observedX':new Vector(x),'observedY':new Vector(y)});

model.train(1 / 10000000000);


console.log(model.line);

console.log(`actual m ${m}, actual c: ${c}`);

console.log(`predicted model: `,model.predict(5))

console.log(`actual value: ${(m * 5) + c}`)

model.save('test');

