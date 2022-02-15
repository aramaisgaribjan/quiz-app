const btnShowAnswer = document.querySelector(".btnShowAnswer");
const answerText = document.querySelector(".answer")

btnShowAnswer.addEventListener("click", () => {
    answerText.classList.toggle("answer")
  });
 
  function change() 
  {
      var elem = document.getElementById("btnShowAnswer");
      if (elem.value=="Hide Answer") elem.value = "Show Answer";
      else elem.value = "Hide Answer";
  }