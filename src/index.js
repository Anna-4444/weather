import "./styles.css"
import { greeting } from "./greeting.js";
import mountain from "./assets/mountain.jpg";

console.log(greeting);

const element = document.createElement("div");
const picture = new Image();
picture.src = mountain;
element.append(picture);

document.body.append(element);