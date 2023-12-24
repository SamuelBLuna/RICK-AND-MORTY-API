const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const image = document.getElementById('img');

btnGo.addEventListener('click', async (event) => {
    event.preventDefault()
    const result = await fetchAPI(characterId.value)
    // content.textContent = `${JSON.stringify(result, undefined, 2)}`
    content.textContent = `${JSON.stringify(buildResult(result), undefined, 2)}`
    image.src = `${result.image}`
});

const keys = ['name', "status", "species", "gender", "origin", "image", "episode"];

const buildResult = (result) => {
    const newObject = {};
    keys.map((key) => document.getElementById(key))
        .map((elem) => {
            elem.checked && (newObject[elem.name] = result[elem.name])
        })

    return newObject
}

const fetchAPI = (value) => {
    const url = `https://rickandmortyapi.com/api/character/${value}`;
    const result = fetch(url)
    .then((res) => res.json())
    .then((data) => {
        return data
    });

    return result
}
 