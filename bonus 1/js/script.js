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

    {'name': 'Wayne Barnett',
    'role': 'Founder & CEO',
    'image': 'wayne-barnett-founder-ceo.jpg'},

    {'name': 'Barbara Ramos',
    'role': 'Graphic Designer',
    'image': 'barbara-ramos-graphic-designer.jpg'}
]

console.log(teamMembers)

//creo un ciclo per visualizzare tutti gli oggetti dell'array e al suo interno un'altro ciclo per visulizzare tutte le proprità di ogni oggetto
for (let i = 0; i < teamMembers.length; i++) {
    let membroAttuale = teamMembers[i];
    //creo una card dove inserire tutte le proprietà dell'oggetto come stringa
    let cardMember = document.createElement('div');
    for (let key in membroAttuale) {
        console.log(membroAttuale[key]);
        //aggiungo le proprietà dell'oggetto come stringa o come immagine a seconda del contenuto
        if (membroAttuale[key].includes('.jpg')) {
            cardMember.innerHTML += `<img src="./img/${membroAttuale[key]}"</img>`
        } else {
        cardMember.innerHTML += `<span>${membroAttuale[key]} - </span>`;
        }
    }
    console.log(cardMember);
    container.append(cardMember);
    console.log(container)
}
console.log(container);
