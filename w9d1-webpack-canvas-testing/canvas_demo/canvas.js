
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("myCanvas");
    canvas.height = 500;
    canvas.width = 500;
    const ctx = canvas.getContext("2d");
    
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 500, 500);

    ctx.beginPath();
    ctx.arc(100, 100, 100, 0, .5 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.strokeStyle = 'yellow'
    ctx.stroke();
})