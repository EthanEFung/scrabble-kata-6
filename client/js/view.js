window.onload = function() {
  //define views and append to DOM
  const $SearchBar = createSearchBar();
  const $Output = createOutput();
  document.body.appendChild($SearchBar);
  document.body.appendChild($Output);
};

function createSearchBar() {
  const $SearchBar = document.createElement("div");
  $SearchBar.setAttribute("id", "search-bar");
  $SearchBar.appendChild(createInput()); // see controllers for input
  $SearchBar.appendChild(createSubmitBtn()); // see controllers for button
  return $SearchBar;
}

function createOutput() {
  const $Output = document.createElement("ul");
  $Output.setAttribute("id", "output");
  return $Output;
}

function createOutputWord(word) {
  const $Word = document.createElement("li");
  $Word.setAttribute("class", "word");
  $Word.textContent = word;
  return $Word;
}
