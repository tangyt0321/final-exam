function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var week = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  var day = date.getDay();
  var month = date.getMonth() + 1;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // document.getElementById("week").innerHTML = week[day];
  document.getElementById("date").innerHTML =
    month + "月" + date.getDate() + "日" + week[day] + h + ":" + m + ":" + s;
}
setInterval(showTime, 1000);

function checkDayAndSetColor() {
  var currentDate = new Date();
  var dayOfWeek = currentDate.getDay();
  // var nx = ["n1", "n2", "n3", "n4", "n5", "n6", "n7"];
  var color = ["rgb(75, 75, 75)", "rgb(150, 150, 150)"];
  switch (dayOfWeek) {
    case 0:
      document.getElementById("n1").style.backgroundColor = color[1];
      document.getElementById("n2").style.backgroundColor = color[1];
      document.getElementById("n3").style.backgroundColor = color[1];
      document.getElementById("n4").style.backgroundColor = color[1];
      document.getElementById("n5").style.backgroundColor = color[1];
      document.getElementById("n6").style.backgroundColor = color[0];
      document.getElementById("n7").style.backgroundColor = color[0];
      document.getElementById("n8").style.backgroundColor = color[1];
      document.getElementById("n9").style.backgroundColor = color[1];
      break;
    case 1:
      document.getElementById("n1").style.backgroundColor = color[1];
      document.getElementById("n2").style.backgroundColor = color[0];
      document.getElementById("n3").style.backgroundColor = color[0];
      document.getElementById("n4").style.backgroundColor = color[1];
      document.getElementById("n5").style.backgroundColor = color[1];
      document.getElementById("n6").style.backgroundColor = color[1];
      document.getElementById("n7").style.backgroundColor = color[0];
      document.getElementById("n8").style.backgroundColor = color[1];
      document.getElementById("n9").style.backgroundColor = color[0];
      break;
    case 2:
      document.getElementById("n1").style.backgroundColor = color[1];
      document.getElementById("n2").style.backgroundColor = color[1];
      document.getElementById("n3").style.backgroundColor = color[1];
      document.getElementById("n4").style.backgroundColor = color[0];
      document.getElementById("n5").style.backgroundColor = color[0];
      document.getElementById("n6").style.backgroundColor = color[1];
      document.getElementById("n7").style.backgroundColor = color[1];
      document.getElementById("n8").style.backgroundColor = color[0];
      document.getElementById("n9").style.backgroundColor = color[0];
      break;
    case 3:
      document.getElementById("n1").style.backgroundColor = color[1];
      document.getElementById("n2").style.backgroundColor = color[1];
      document.getElementById("n3").style.backgroundColor = color[0];
      document.getElementById("n4").style.backgroundColor = color[0];
      document.getElementById("n5").style.backgroundColor = color[1];
      document.getElementById("n6").style.backgroundColor = color[0];
      document.getElementById("n7").style.backgroundColor = color[1];
      document.getElementById("n8").style.backgroundColor = color[0];
      document.getElementById("n9").style.backgroundColor = color[1];
      break;
    case 4:
      document.getElementById("n1").style.backgroundColor = color[1];
      document.getElementById("n2").style.backgroundColor = color[0];
      document.getElementById("n3").style.backgroundColor = color[1];
      document.getElementById("n4").style.backgroundColor = color[1];
      document.getElementById("n5").style.backgroundColor = color[0];
      document.getElementById("n6").style.backgroundColor = color[0];
      document.getElementById("n7").style.backgroundColor = color[0];
      document.getElementById("n8").style.backgroundColor = color[1];
      document.getElementById("n9").style.backgroundColor = color[1];
      break;
    case 5:
      document.getElementById("n1").style.backgroundColor = color[1];
      document.getElementById("n2").style.backgroundColor = color[1];
      document.getElementById("n3").style.backgroundColor = color[0];
      document.getElementById("n4").style.backgroundColor = color[0];
      document.getElementById("n5").style.backgroundColor = color[1];
      document.getElementById("n6").style.backgroundColor = color[1];
      document.getElementById("n7").style.backgroundColor = color[0];
      document.getElementById("n8").style.backgroundColor = color[1];
      document.getElementById("n9").style.backgroundColor = color[0];
      break;
    case 6:
      document.getElementById("n1").style.backgroundColor = color[1];
      document.getElementById("n2").style.backgroundColor = color[0];
      document.getElementById("n3").style.backgroundColor = color[1];
      document.getElementById("n4").style.backgroundColor = color[1];
      document.getElementById("n5").style.backgroundColor = color[0];
      document.getElementById("n6").style.backgroundColor = color[1];
      document.getElementById("n7").style.backgroundColor = color[1];
      document.getElementById("n8").style.backgroundColor = color[0];
      document.getElementById("n9").style.backgroundColor = color[1];
      break;
    default:
      break;
  }
}
window.onload = checkDayAndSetColor;
