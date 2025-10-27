import "./style.css";

document.body.innerHTML = `
  <h1>This is a Sketch Pad of Sol~ </h1>
  <canvas id = "canvas" width= "256" height = "256"></canvas>
`;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!; // Asserting canvas type and non-null context

ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeRect(0, 0, canvas.width, canvas.height);

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

// 4. Single Mouse Up Listener
canvas.addEventListener("mouseup", () => {
  cursor.active = false;
});

// 5. Clear Button Logic (Corrected clearRect arguments)
const clearButton = document.createElement("button");
clearButton.innerHTML = "Clear";
document.body.append(clearButton);

clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.clearRect(5, 5, 5, 5);
}); //
