window.addEventListener("load", function() {
  function handleForm(event) {
    event.preventDefault();
    const sentence = document.querySelector("input#sentence").value;
    const line = sentence.split(" ");
    let reverseArr = [];
    let joinArr = [];
    console.log(joinArr);
    const pElement = document.createElement("p");
    line.forEach(speak => {
      reverseArr = Array.from(speak);
      joinArr.push(reverseArr.reverse().join(""));
    });
    pElement.append(joinArr);
    document.body.append(pElement);
  }
  document.querySelector("form").addEventListener("submit", handleForm);
});