'use strict';

//dichiaro le variabili
let container = document.getElementById('container');

//creo l'array contenente tutti i membri del team con le relative informazioni
const teamMembers = [
    {'name': 'Wayne Barnett',
    'role': 'Founder & CEO',
    'image': 'wayne-barnett-founder-ceo.jpg'},

    {'name': 'Angela Caroll',
    'role': 'Chief Editor',
    'image': 'angela-caroll-chief-editor.jpg'},

    {'name': 'Walter Gordon',
    'role': 'Office Manager',
    'image': 'walter-gordon-office-manager.jpg'},

    {'name': 'Angela Lopez',
    'role': 'Social Media Manager',
    'image': 'angela-lopez-social-media-manager.jpg'},

    {'name': 'Scott Estrada',
    'role': 'Developer',
    'image': 'scott-estrada-developer.jpg'},

    {'name': 'Barbara Ramos',
    'role': 'Graphic Designer',
    'image': 'barbara-ramos-graphic-designer.jpg'}
]

console.log(teamMembers)

//creo un ciclo per visualizzare tutti gli oggetti dell'array e al suo interno un'altro ciclo per visulizzare tutte le proprità di ogni oggetto
for (let i = 0; i < teamMembers.length; i++) {
    
    let membroAttuale = teamMembers[i];

    //Creo l'elemento del DOM che rappresenterà la card di ogni membro
    let card = `<div class="card col-3 m-1 my-3">
        <h5 class="text-center mt-3">${membroAttuale.name}</h5>
        <p class="text-center">${membroAttuale.role}</p> 
        <img src='./img/${membroAttuale.image}'></img>
    </div>`;

    //concateno la nuova card relativa al singolo membro al contenitore con le altre
    container.innerHTML += card;
}
