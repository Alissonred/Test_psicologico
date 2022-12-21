
// let counter1 =0
// let counter2=0
// let counter3=0

// const ask11 = document.getElementById('ask1Opca')
// const ask12 = document.getElementById('ask1Opcb')
// const ask13 = document.getElementById('ask1Opcc')
// const ask21 = document.getElementById('ask2Opca')
// const ask22 = document.getElementById('ask2Opcb')
// const ask23 = document.getElementById('ask2Opcc')
// const ask31 = document.getElementById('ask3Opca')
// const ask32 = document.getElementById('ask3Opcb')
// const ask33 = document.getElementById('ask3Opcc')
// const ask41 = document.getElementById('ask4Opca')
// const ask42 = document.getElementById('ask4Opcb')
// const ask43 = document.getElementById('ask4Opcc')
// const validationButton = document.getElementById('validationButton')

// const ask1 = document.getElementById('question1')
// const ask2 = document.getElementById('question2')
// const ask3 = document.getElementById('question3')
// const ask4 = document.getElementById('question4')

// const validation = (event, c1=0, c2=0, c3=0)=>{
//     //console.log(event.target.id, 'se selecc');
//     if(ask11.id === event.target.id){
//         console.log('se selecciono a');
//     }
//     if(ask12.id === event.target.id){
//         console.log('se selecciono b');
//     }
//     if(ask13.id === event.target.id){
//         console.log('se selecciono c');
//     }
//     if(ask23.id === event.target.id){
//         console.log('se selecciono c');
//     }
//     if(ask23.id === event.target.id){
//         console.log('se selecciono c');
//     }
//     if(ask23.id === event.target.id){
//         console.log('se selecciono c');
//     }
// }

// //validationButton.addEventListener('click', validation);
// ask1.addEventListener('click', (event)=>validation(event, ask1));
// ask2.addEventListener('click', (event)=>validation(event, ask2));
// ask3.addEventListener('click', (event)=>validation(event, ask3));
// ask4.addEventListener('click', (event)=>validation(event, ask4));


//////////////////////////////////////////////////////////////
const questionsContainer= document.querySelector('.questionsContainer')
class Question {constructor(enunciado, opcionA, opcionB, opcionC, opcionD){
    this.enunciado = enunciado,
    this.opcionA = opcionA,
    this.opcionB = opcionB,
    this.opcionC = opcionC,
    this.opcionD = opcionD
}
}

let question_1 = new Question('enunciadoAsk1', 'opcionA', 'opcionB', 'opcionC', 'opcionD');
let question_2 = new Question('enunciadoAsk2', 'opcionA', 'opcionB', 'opcionC', 'opcionD');
let question_3 = new Question('enunciadoAsk3', 'opcionA', 'opcionB', 'opcionC', 'opcionD');
let question_4 = new Question('enunciadoAsk4', 'opcionA', 'opcionB', 'opcionC', 'opcionD');

const askCollection = [question_1, question_2, question_3, question_4];

askCollection.forEach(ask =>{
    const enunciadoAsk = document.createElement('p')
    enunciadoAsk.textContent=ask.enunciado
    const opcionA = document.createElement('input')
    opcionA.type='radio'
    opcionA.name='ask1'
})

console.log(question_1.enunciado,'es enunciado de ask1');
//
//console.log(questionsContainer, 'questionsContainer');
