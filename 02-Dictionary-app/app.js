const form = document.querySelector(".form");
const result = document.querySelector(".result");

let data = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const search = document.querySelector(".search");
  getWord(search.value);
});

async function getWord(word) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const resultFetch = await response.json();
    data = resultFetch;
    showHTML(data[0]);

    form.reset();
  } catch (error) {
    console.log(error);
  }
}

function showHTML(data) {

    cleanHTML();
    
  const div = document.createElement("DIV");
  div.innerHTML = `
        <h2 class="title-result">${data.word}</h2>
        <p class="part-of-speech">antonyms: ${data.meanings[2]?.antonyms}</p>
        <p class="definition">${data.meanings[0].definitions[0].definition}</p>
    `;

    result.appendChild(div);
};

function cleanHTML() {
    while(result.firstChild) {
        result.removeChild(result.firstChild);
    }
}