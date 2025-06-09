const shareEle = document.getElementById("share");
const activeEle = document.getElementById("notActive");
let Active = false;

function turnActive() {
  if (Active) {
    revert();
    return;
  }

  activeEle.style.display = "flex";
  Active = true;
  console.log(Active);
}
function revert() {
  activeEle.style.display = "none";
  Active = false;
  console.log(Active);
}
