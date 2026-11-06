window.addEventListener("load", function() {
  function handleForm(event) {
    event.preventDefault();
    const sentence = document.querySelector("input#sentence").value;
    const line = sentence.trim().split(/\s+/);
    const pElement = document.createElement("p");
    line.forEach(speak => {
      const speech = Array.from(speak);
      //let reverseArr = speech.toReversed();
      //let joinArr = reverseArr.join(",");
      pElement.append(reverseArr);
    });
    document.body.append(pElement);
  }
  document.querySelector("form").addEventListener("submit", handleForm);
});