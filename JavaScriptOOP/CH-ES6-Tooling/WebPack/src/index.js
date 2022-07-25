import { Circle } from "./Circle.js";
// This way use in html

// import {Circle} from '../CommonJs-Modules-in-Node/Circle.js';

// It will throw error, proper way is to use webpack

const c = new Circle(1);

console.log(c) // Circle {}