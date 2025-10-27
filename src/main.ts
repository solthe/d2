// import exampleIconUrl from "./noun-paperclip-7598668-00449F.png";
import "./style.css";

document.body.innerHTML = `
  <h1>This is a Sketch Pad of Sol~ </h1>
  <canvas id = "canvas" width= "256" height = "256"></canvas>
`;

<<<<<<< HEAD
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeRect(0, 0, canvas.width, canvas.height);
=======
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!; // <-- Non-Null Assertion Operator '!'

if (ctx) {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 5;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
} else {
  // Optionally handle the error case if the context isn't available
  console.error("Could not get 2D rendering context.");
}

const cursor = { active: false, x: 0, y: 0 };

canvas.addEventListener("mousedown", (e: MouseEvent) => {
  cursor.active = true;
  cursor.x = e.offsetX; //relative coordinate
  cursor.y = e.offsetY;
});

canvas.addEventListener("mousemove", (e: MouseEvent) => {
  if (cursor.active) {
    ctx.beginPath();
    ctx.moveTo(cursor.x, cursor.y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    cursor.x = e.offsetX;
    cursor.y = e.offsetY;
  }
});

canvas.addEventListener("mouseup", (e) => {
  cursor.active = false;
});
