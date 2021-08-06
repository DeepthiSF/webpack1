import { pascalCase } from "pascal-case";
import themessage from "./message.js";

import './css/coffee.css';
import './css/colors.css';
import './css/main.css';

import Flower from "./images/Flower.jpg"
import Panda from "./images/Panda.jpg"

const title = document.getElementById("title");

title.innerHTML = pascalCase(themessage);

const myFlower = document.getElementById("flower");
myFlower.src = Flower;

// const myPanda = new Image();
// myPanda.src = Panda;
