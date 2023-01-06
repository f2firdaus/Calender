var dt = new Date();
function RenderDate() {

console.log(dt.getDate());



// console.log(day);
let endDate = new Date(dt.getFullYear(), dt.getMonth()+1 , 0).getDate();
console.log(endDate);
let prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
console.log(prevDate);
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// let month=new months()
document.getElementById("date_str").innerHTML = dt.toDateString();

document.getElementById("month").innerHTML = months[dt.getMonth()];

let today = new Date();
// console.log(today)
  let cells = "";
  let day = dt.getDay()+2;
  console.log(day);
for (let x = day; x >0; x--) {
  cells += "<div class='prev_date'>" + (prevDate - x+1) + "</div>";
}
for (let i = 1; i <= endDate; i++) {
  if (i == today.getDate() && dt.getMonth()== today.getMonth()) {
    cells += "<div class='today'>" + i + "</div>";
  } else {
    cells += "<div>" + i + "</div>";
  }
}
document.getElementsByClassName("days")[0].innerHTML = cells;

}


function movefun(para) {
  // console.log(para)
  if (para === 'prev') {
    dt.setMonth(dt.getMonth() - 1)
  }
  if(para === 'next') {
      dt.setMonth(dt.getMonth()+1)
    }
    RenderDate()
}
movefun()