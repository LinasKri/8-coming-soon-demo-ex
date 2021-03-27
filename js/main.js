import suma from "./components/sum.js";
import { minus } from "./components/minus.js";
import { devide } from "./components/devide.js";
import { multiply } from "./components/multiply.js";
import { average } from "./components/average.js";

const rez1 = suma(8, 5);
const rez2 = minus(8, 5);
const rez3 = multiply(8, 5);
const rez4 = devide(8, 5);
const rez5 = average(8, 5);

console.log(rez1);
console.log(rez2);
console.log(rez3);
console.log(rez4);
console.log(rez5);