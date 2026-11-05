window.addEventListener("load", function() {
  function handleForm(event) {
    event.preventDefault();
    const sentence = document.querySelector("input#sentence").value;
    const line = sentence.trim().split(/\s+/);
    const pElement = document.createElement("p");
    line.forEach(speak => {
      const speech = Array.from(speak);
      speech.reverse().join(" ");
      console.log(speech);
      pElement.append(speech);
    });
    document.body.append(pElement);
  }
  document.querySelector("form").addEventListener("submit", handleForm);
});