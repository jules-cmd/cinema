/*document.addEventListener("DOMContentLoaded", () => {
    console.log("ok");
    let classicFilm = [{
        photo: "./asset/joker.jpg",
        titre: "Joker",
        date: 2019,
        realisateur: "test",
        genre: "thriller" 
    },{
        photo: "./asset/mando.jpg",
        titre: "the mandalorian",
        date: 2021,
        realisateur: "test",
        genre: "Science-fiction "
    }, {
        photo: "./asset/harry-potter.jpg",
        titre: "Harry potter",
        date: 2019,
        realisateur: "test",
        genre: "thriller"
    }, {
        photo: "./asset/the-batman.jpg",
        titre: "The batman",
        date: 2022,
        realisateur: "test",
        genre: ""
    }];

    console.table(classicFilm);
    let target = "";
    let el = document.querySelector("figcaption");
    for (data of classicFilm) {
        console.log(`${data.photo} ${data.titre} ${data.date} 
        ${data.realisateur} ${data.genre}`);
        //afficher dans le dom
        target += `<figure>
                <img src="${data.photo}" alt="${data.titre}">
                <figcaption>
                    <ul>
                        <h2>${data.titre}</h2>
                        Date : ${data.date}
                        Réalisateur : ${data.realisateur}
                        Genre : ${data.genre}
                    </ul>
                </figure>
                `;
    }
    el.innerHTML = target;
    //local storage
    let testFilm = JSON.stringify(classicFilm);
    localStorage.setItem("liste", testFilm);
    let stock = localStorage.getItem("liste");
    console.table(JSON.parse(stock));
});