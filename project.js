class ProjectCard extends HTMLElement {
    constructor({ title = 'Project Title', description = 'This is a description of the project.',
        link = "",
        linkDescription = "Click Here",
        picture = "hello",
        altText = "" } = {}) {
        super();

        this.title = title;
        this.description = description;
        this.link = link;
        this.linkDescription = linkDescription;
        this.picture = picture;
        this.altText = altText;
    }

    connectedCallback() {
        this.innerHTML = `
            <h2>${this.title}</h2>
            <p>${this.description}</p>
            <picture> 
                <source srcset = "${this.picture}" type="image/png"> 
                <img src="${this.picture}" alt="${this.altText}">
            </picture>
            <a href = ${this.link}>${this.linkDescription} </a>
        `;
    }
}

customElements.define('project-card', ProjectCard);
// let card1 = new ProjectCard({
//     title: 'Ensemble Learning',
//     description: 'Ensemble learning models using Hyper-Dimensional Computing for use on edge devices. Achieved greater energy efficiency and high accuracy on image classification datasets such as mnist and cifar',
//     link: 'https://ieeexplore.ieee.org/abstract/document/10818094',
//     linkDescription: 'IEEE Paper',
//     picture: "inference_proposal.png",
//     altText: "image of ensemble learning using HDC"
// });
// let card2 = new ProjectCard({
//     title: 'Pantry Pal',
//     description: 'Developed an application for generating recipes with pictures based on user voice input ingredients. Implemented API calls for recipe creation, image generation, and speech recognition. Validated logins and stored user profiles with recipes using MongoDB',
//     link: 'https://github.com/ucsd-cse110-fa23/cse-110-project-team_3?tab=readme-ov-file',
//     linkDescription: 'Github Repo',
//     picture: "pantrypal.png",
//     alText: "pantry pal logo image"
// });

const projectOne = {
    title: 'Ensemble Learning',
    description: 'Ensemble learning models using Hyper-Dimensional Computing for use on edge devices. Achieved greater energy efficiency and high accuracy on image classification datasets such as mnist and cifar',
    link: 'https://ieeexplore.ieee.org/abstract/document/10818094',
    linkDescription: 'IEEE Paper',
    picture: "inference_proposal.png",
    altText: "image of ensemble learning using HDC"
};
const projectTwo = {
    title: 'Pantry Pal',
    description: 'Developed an application for generating recipes with pictures based on user voice input ingredients. Implemented API calls for recipe creation, image generation, and speech recognition. Validated logins and stored user profiles with recipes using MongoDB',
    link: 'https://github.com/ucsd-cse110-fa23/cse-110-project-team_3?tab=readme-ov-file',
    linkDescription: 'Github Repo',
    picture: "pantrypal.png",
    alText: "pantry pal logo image"
};

localStorage.setItem("projectOne", JSON.stringify(projectOne));
localStorage.setItem("projectTwo", JSON.stringify(projectTwo));

document.getElementById('localBtn').addEventListener('click', function () {
    let p1 = JSON.parse(localStorage.getItem("projectOne"));
    let p2 = JSON.parse(localStorage.getItem("projectTwo"));
    let card1 = new ProjectCard(p1);
    let card2 = new ProjectCard(p2);
    card1.classList.add('card');
    card2.classList.add('card');
    document.querySelector('main').innerHTML = '';
    document.querySelector('main').prepend(card2);
    document.querySelector('main').prepend(card1);

});



