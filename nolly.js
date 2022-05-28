const movie = [
    {
        id: "theRedemption",
        name: "The Redemption",
        like: 0
    },
    {
        id: "africaTechRoot",
        name: "Africa Tech Root",
        like: 0
    },
    {
        id: "theInvisibleMan",
        name: "The Invisible Man",
        like: 0
    },
    {
        id: "theComplicatedProject",
        name: "The Complicated Project",
        like: 0
    },
    {
        id: "simplyJavascript",
        name: "Simply Javascript",
        like: 0
    },
    {
        id: "theNewWeb",
        name: "The New Web",
        like: 0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('nolly-data') == null) {
        localStorage.setItem('nolly-data', JSON.stringify(movie))
    }
});



const handleLikesIncrement = (elementId) => {
    elementId.textContent = Number(elementId.textContent) + 1;

    const data = localStorage.getItem('nolly-data');
    const parsedData = JSON.parse(data);

    const result = parsedData.map(({ id, name, like }) => {
        if (id == elementId.id) {
            like = like + 1
        }
        return { id, name, like };
    })
    localStorage.setItem('nolly-data', JSON.stringify(result));
}



const parsedData = JSON.parse(localStorage.getItem('nolly-data'));
const data = parsedData.sort((a, b) => b.like - a.like)

let contents = "";

data.forEach(({ id, name, like, img }) => {
    contents += `
        <div class="stack">
        <div class="">
        <img class="image" src="https://www.amigonaosecompra.com.br/images/video-thumb-01d43b4eea91cf1f2cd04e900bd263d5.png?vsn=d">
        </div>
        <h4>${name}</h4>
        <span id=${id}>${like}</span>
        <button class="like" onclick="handleLikesIncrement(${id})"><i class="fa fa-thumbs-up"></i></button>
                
        </div>
    `
})

document.getElementById("stackmodule").innerHTML = contents;