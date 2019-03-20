//the date we count down
let daysUntilChristmas = new Date("May 7, 2019 22:00:00").getTime();
let x = setInterval(function(){
  //get today time
  let today = new Date().getTime();
  //dist between now and christmas
  let distance = daysUntilChristmas - today;
   // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //display result
 let time = "Faltam " + days + " dias " + hours + " horas " + minutes + " minutos " + seconds + " segundos.";
 $(".js-days-left").text(time);

   // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    $(".js-days-left").text('Merry Christmass');
  }

},1000);
