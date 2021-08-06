/* This is beginning of a lesson on webpack.
Everything works fine in this simple page. 
We have an html file that loads this simple JS script.
But what were to happen if we were to install third party code 
using npm because we want to use a new module in our code ? 
If we uncomment the import on line 12 and 
the final line of code on line 19, we will see that the code
no longer works because at the time of this writing, browsers
out of the box do not support node modules. 
Webpack can help us solve this problem  */ 

import { pascalCase } from "pascal-case";
import newMessage from "./newFile.js"

const title = document.getElementById("title");

//title.innerHTML = "the quick brown fox";


//title.innerHTML = pascalCase("the quick brown fox");
title.innerHTML = pascalCase(newMessage);


// index.js is the main file where u do all the execution and import all the other files that will have ur code and also other external modules that u import.