const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const image = document.getElementById('img');

btnGo.addEventListener('click', async (event) => {
    event.preventDefault()
    const result = await fetchAPI(characterId.value)
    content.innerText = `${JSON.stringify(result, undefined, 2)}`
    image.src = `${result.image}`
});

const fetchAPI = (value) => {
    const url = `https://rickandmortyapi.com/api/character/${value}`;
    const result = fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return data
    });

    return result
}
 