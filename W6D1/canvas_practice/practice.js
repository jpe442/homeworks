document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("mycanvas");

  canvas.width = 1000;
  canvas.height = 1000;

  // const ctx = canvasEl.getContext("2d");
  // ctx.fillstyle = "purple";
  // ctx.fillRect = (20, 20, 100, 100);
  // ctx.fill();
  var ctx = canvas.getContext('2d');

  // ctx.beginPath();
  // ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
  // ctx.strokeStyle = "black";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "grey";
  // ctx.fill();

  // ctx.beginPath();
  // ctx.arc(200, 300, 50, 0, 2 * Math.PI, true);
  // ctx.strokeStyle = "black";
  // ctx.lineWidth = 5;
  // ctx.stroke();
  // ctx.fillStyle = "grey";
  // ctx.fill();

  // ctx.moveTo(0,0);
  // ctx.lineTo(500, 500);
  // ctx.stroke();
  // function draw() {
    // var canvas = document.getElementById('mycanvas');
  //   if (canvas.getContext) {

      ctx.beginPath();
      ctx.arc(55, 80, 20, 0, 2 * Math.PI, true);
      ctx.strokeStyle = "rgba(0, 0, 200, 0.1";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = "rgba(200, 0, 0, 0.3";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(68, 93, 20, 0, 2 * Math.PI, true);
      ctx.strokeStyle = "rgba(0, 0, 200, 0.1";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = "rgba(0, 0, 200, 0.3";
      ctx.fill();

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(20, 10, 25, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect(30, 30, 25, 50);

      
}
  
)
