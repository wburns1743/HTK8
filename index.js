function HTKcalc(){
  var verticalJump = parseInt(document.getElementById('vjump').value);

  var deadlift = parseInt(document.getElementById('dlMax').value);

  var press = parseInt(document.getElementById('ohPress').value);

  var pullup = parseInt(document.getElementById('pullMax').value);

  var pushup = parseInt(document.getElementById('pushMax').value);

  var sprint400 = parseInt(document.getElementById('sprint').value);

  var shuttle50 = parseInt(document.getElementById('shuttle').value);

  var total_score = 0;
  var rating;
  var current_score =0;

  current_score = total_score;

  //*************** Vertical Jump Score ******************//
  if(verticalJump < 33){
    total_score += 100;
  } else if (verticalJump > 30 && verticalJump <= 33) {
    total_score += 90;
  } else if (verticalJump > 27 && verticalJump <= 30) {
    total_score += 80
  } else if (verticalJump > 24 && verticalJump <= 27) {
    total_score += 70;
  } else if (verticalJump > 21 && verticalJump <= 24){
    total_score += 60;
  } else if (verticalJump > 18 && verticalJump <= 21) {
    total_score += 50
  } else if (verticalJump > 15 && verticalJump <= 18) {
    total_score += 40;
  } else if (verticalJump > 12 && verticalJump <= 15) {
    total_score += 30;
  } else if (verticalJump >= 10 && verticalJump <= 12) {
    total_score += 20;
  } else {
    total_score += 10;
  }
  document.getElementById("jump-score").innerHTML=total_score+" / 100";

  current_score = total_score;
  //******************** Deadlift Score *****************//

  if(deadlift >= 440){
    total_score += 100;
  } else if (deadlift >= 405 && deadlift < 440) {
    total_score += 90;
  } else if (deadlift >= 370 && deadlift < 405) {
    total_score += 80;
  } else if(deadlift >= 335 && deadlift < 370){
    total_score += 70;
  } else if (deadlift >= 300 && deadlift < 335) {
    total_score += 60;
  } else if (deadlift >= 265 && deadlift < 300) {
    total_score += 50;
  } else if (deadlift >= 230 && deadlift < 265) {
    total_score += 40;
  } else if(deadlift >= 195 && deadlift < 230){
    total_score += 30;
  } else if (deadlift >= 160 && deadlift < 195) {
    total_score += 20;
  } else {
    total_score += 10;
  }
  document.getElementById("dl-score").innerHTML=(total_score-current_score)+" / 100";
  //************* OH Press Score ***************//
  current_score = total_score;
  if(press >= 200){
    total_score += 100;
  } else if (press >= 185 && press < 200) {
    total_score += 90;
  } else if (press >= 170 && press < 185) {
    total_score += 80;
  } else if (press >= 155 && press < 170) {
    total_score += 70;
  } else if (press >= 140 && press < 155) {
    total_score += 60;
  } else if (press >= 125 && press < 140) {
    total_score += 50;
  } else if (press >= 110 && press < 125){
    total_score += 40;
  } else if (press >= 95 && press < 110) {
    total_score += 30;
  } else if (press >= 80 && press < 95) {
    total_score += 20;
  } else {
    total_score += 10;
  }
  document.getElementById("press-score").innerHTML=(total_score-current_score)+" / 100";

  //****************** Pull-up Score ********************//
  current_score = total_score;
  if(pullup >= 19){
    total_score += 100;
  } else if (pullup >= 17 && pullup < 19) {
    total_score += 90;
  } else if (pullup >= 15 && pullup < 17) {
    total_score += 80;
  } else if (pullup >= 13 && pullup < 15) {
    total_score += 70;
  } else if (pullup >= 11 && pullup < 13) {
    total_score += 60;
  } else if (pullup >= 9 && pullup < 11){
    total_score += 50;
  } else if (pullup >= 7 && pullup < 9){
    total_score += 40;
  } else if (pullup >= 5 && pullup < 7){
    total_score += 30;
  } else if (pullup >= 3 && pullup < 5){
    total_score += 20;
  } else {
    total_score += 10;
  }
  document.getElementById("pullup-score").innerHTML=(total_score-current_score)+" / 100";

  //***************** push-up Score *******************//
current_score = total_score;
  if (pushup >= 50){
    total_score += 100;
  } else if (pushup >= 46 && pushup < 50) {
    total_score += 90;
  } else if (pushup >= 41 && pushup < 46) {
    total_score += 80;
  } else if (pushup >= 36 && pushup < 41) {
    total_score += 70;
  } else if (pushup >= 31 && pushup < 36) {
    total_score += 60;
  } else if (pushup >= 26 && pushup < 31) {
    total_score += 50;
  } else if (pushup >= 21 && pushup < 26) {
    total_score += 40;
  } else if (pushup >= 16 && pushup < 21) {
    total_score += 30;
  } else if (pushup >= 10 && pushup < 16) {
    total_score += 20;
  } else {
    total_score += 10;
  }
  document.getElementById("pushup-score").innerHTML=(total_score-current_score)+" / 100";

  //********************* 400m Sprint Score *****************//
  current_score = total_score;
  if (sprint400 < 60){
    total_score += 100;
  } else if (sprint400 >= 60 && sprint400 <= 67) {
    total_score += 90;
  } else if (sprint400 > 67 && sprint400 <= 74) {
    total_score += 80;
  } else if (sprint400 > 74 && sprint400 <= 81) {
    total_score += 70;
  } else if (sprint400 > 81 && sprint400 <= 88) {
    total_score += 60;
  } else if (sprint400 > 88 && sprint400 <= 95) {
    total_score += 50;
  } else if (sprint400 > 95 && sprint400 <= 102) {
    total_score += 40;
  } else if (sprint400 > 102 && sprint400 <= 109) {
    total_score += 30;
  } else if (sprint400 > 109 && sprint400 <= 116) {
    total_score += 20;
  } else {
    total_score += 10;
  }
  document.getElementById("sprint-score").innerHTML=(total_score-current_score)+" / 100";

  //********************** 50m shuttle Score *******************//
  current_score = total_score;
  if(shuttle50 < 4.5){
    total_score += 100;
  } else if (shuttle50 >= 4.5 && shuttle50 <=4.79 ) {
    total_score += 90;
  } else if (shuttle50 > 4.79 && shuttle50 <= 5.09) {
    total_score += 80
  }else if (shuttle50 > 5.09 && shuttle50 <= 5.39) {
    total_score += 70;
  } else if (shuttle50 > 5.39 && shuttle50 <= 5.69) {
    total_score += 60;
  } else if (shuttle50 > 5.69 && shuttle50 <= 5.99) {
    total_score += 50;
  } else if (shuttle50 > 5.99 && shuttle50 <= 6.29) {
    total_score += 40;
  } else if (shuttle50 > 6.29 && shuttle50 <= 6.59) {
    total_score += 30;
  } else if(shuttle50 > 6.59 && shuttle50 <= 6.89){
    total_score += 20;
  } else{
    total_score += 10;
  }
  document.getElementById("shuttle-score").innerHTML=(total_score-current_score)+" / 100";

  //**************************** 1.5 mile run Score ***************//
  current_score=total_score;

  var seconds = document.getElementById("run-min") * 60;
  seconds += document.getElementById("run-sec");

  if(seconds < 500){
    total_score += 100;
  } else if (seconds < 520 && seconds >= 500) {
    total_score += 90;
  } else if (seconds < 540 && seconds >= 520) {
    total_score += 80;
  } else if (seconds < 560 && seconds >= 540) {
    total_score += 70;
  } else if (seconds < 580 && seconds >= 560) {
    total_score += 60
  } else if (seconds < 600 && seconds >= 580) {
    total_score += 50;
  } else if (seconds < 620 && seconds >= 600) {
    total_score += 40;
  } else if (seconds < 640 && seconds >= 620) {
    total_score += 30;
  } else if (seconds < 660 && seconds >= 640) {
    total_score += 20;
  } else {
    total_score += 10;
  }
  document.getElementById("run-score").innerHTML= (total_score-current_score)+" / 100";

  document.getElementById("composite").innerHTML=(total_score)+" / 800";
}
