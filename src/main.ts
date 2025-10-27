// import exampleIconUrl from "./noun-paperclip-7598668-00449F.png";
import "./style.css";

document.body.innerHTML = `
  <h1>This is a Sketch Pad of Sol~ </h1>
  <canvas id = "canvas" width= "256" height = "256"></canvas>
`;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeRect(0, 0, canvas.width, canvas.height);
