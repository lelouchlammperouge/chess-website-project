document.getElementById("dudewhat?");
addEventListener("click", calculate01);

function calculate01() {
  let q1 = +document.getElementById("question01").value;
  let q2 = +document.getElementById("question02").value;
  let q3 = +document.getElementById("question03").value;
  let q4 = +document.getElementById("question04").value;

  if (q1 === 2) {
    document.getElementById("a1").innerHTML = "correct";
  } else {
    document.getElementById("a1").innerHTML = "incorrect";
  }
  if (q2 === 64) {
    document.getElementById("a2").innerHTML = "correct";
  } else {
    document.getElementById("a2").innerHTML = "incorrect";
  }
  if (q3 === 16) {
    document.getElementById("a3").innerHTML = "correct";
  } else {
    document.getElementById("a3").innerHTML = "incorrect";
  }
  if (q4 === 2) {
    document.getElementById("a4").innerHTML = "correct";
  } else {
    document.getElementById("a4").innerHTML = "incorrect";
  }
}
