const joinForm = document.getElementById("joinForm");
const joinInput = joinForm.querySelector(".input");
const joinBtn = joinForm.querySelector("button");
const joinText = joinForm.querySelector("p");
joinBtn.onclick = () => {
  joinInput.classList.add("active");
  if(joinInput.classList.contains("active")) {
    setTimeout(() => {
      joinBtn.setAttribute("type", "submit");
    }, 500);
  }
}

