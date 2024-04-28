function timeDisplay() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
setInterval(timeDisplay, 1000);
