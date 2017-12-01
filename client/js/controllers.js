//todo: define

function createInput() {
  const $Input = document.createElement("input");
  $Input.setAttribute("id", "input");
  return $Input;
}

function createSubmitBtn() {
  const $SubmitBtn = document.createElement("button");
  $SubmitBtn.setAttribute("id", "submit");
  $SubmitBtn.addEventListener("click", e => {
    e.preventDefault();
    matchQuery();
  });
  return $SubmitBtn;
}

function matchQuery() {
  const input = document.getElementById("input").value;
  fetch(`/${input}`)
    .then(res => res.blob())
    .then(data => {
      console.log(data);
      //return an array
      const $Output = document.getElementById("output");
      data.forEach(word => {
        const $Word = createOutputWord(word); // function defined in view.js
        $Output.appendChild($Word);
      });
    });
}
