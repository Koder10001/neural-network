/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
"use-strict";

import { resultIndex } from "./resultIndex.js";
const fs = require("fs");
const path = require("path");
import png from "png-js";
let imgPath = "./training/";
import * as fn from "./function.js"
import { waitForDebugger } from "inspector";



const imgSize = 1200*900


let imgList = fs.readdirSync(imgPath);

const learningRate = 0.1;

for(let img of imgList){
    let imgColor = new Array(imgSize);
    await png.decode(path.join(imgPath,img),(px)=>{
        //console.log(px.length);

        for(let i = 0;i< px.length; i+=4){
            imgColor.push((px[i] + px[i+1] + px[i+2]) / 3 / 255);
        }
        
        //console.log(imgColor);
    });
    break;
}

 

let inputs = [  // 3 input samples
    [1,2,3,2.5],
    [2.0,5.0,-1.0,2.0],
    [-1.5,2.7,3.3,-0.8]
];

let weights = [           // 3 nodes in 1 layer
    [0.2,0.8,-0.5,1.0],
    [0.5,-0.91,0.26,-0.5],
    [-0.26,-0.27,0.17,0.87],
]

let biases = [2.0,3.0,0.5]  // 3 bias for 3 nodes

console.log(fn.dotBatch(weights,inputs));