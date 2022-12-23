
//////////////////////////////////////////////////////////////

const questionsContainer= document.querySelector('.questionsContainer')
const canvasGrafica = document.getElementById('miGrafica').getContext('2d')
let containerAsk
let containerOptions
let umbralQuinestesico=0
let umbralVisual=0
let umbralAuditivo=0
let askIndex = 0
let opcIndex = 0
let arrayAsk = []
let arrayOpciones=[]
let arrayOpcionesNodes=[]
let checkeado
let arrayOpcionesCheckeado=[]

class Question {constructor(enunciado, opciones){
    this.enunciado = enunciado,
    this.opciones = opciones
}
}

let question_1 = new Question('enunciadoAsk1', ['opcionA1', 'opcionB1', 'opcionC1']);
let question_2 = new Question('enunciadoAsk2', ['opcionA2', 'opcionB2', 'opcionC2']);
let question_3 = new Question('enunciadoAsk3', ['opcionA3', 'opcionB3', 'opcionC3']);
let question_4 = new Question('enunciadoAsk4', ['opcionA4', 'opcionB4', 'opcionC4']);

const askCollection = [question_1, question_2, question_3, question_4];

askCollection.forEach(ask =>{
    askIndex++
    containerAsk = document.createElement('article')
     containerOptions = document.createElement('section')
     containerOptions.id=`ask${askIndex}`
     const enunciadoAsk = document.createElement('p')
     enunciadoAsk.textContent=ask.enunciado
     ask.opciones.forEach(opc =>{
        opcIndex++
        const opciones = document.createElement('input')
        opciones.type='radio'
        opciones.name=`ask${askIndex}`
        opciones.value=opcIndex
        opciones.id=`ask${askIndex}${opcIndex}`
        opciones.required
        containerOptions.append(opciones)
        arrayOpciones.push(opciones)
    })
    arrayAsk.push(containerOptions)// para guardar nodos de pregunta en array
    opcIndex = 0
    containerAsk.append(enunciadoAsk,containerOptions)
    questionsContainer.append(containerAsk)
})

const botonEvaluar = document.createElement('button')
botonEvaluar.textContent='evaluar'
botonEvaluar.classList.add('btn');
questionsContainer.append(botonEvaluar)


const validationOptions = ()=>{
    checkeado = [...arrayOpciones].filter(k=>k.checked == true)// array con lo seleccionado
    umbralQuinestesico = checkeado.filter(n=>n.value==1).length
    umbralVisual = checkeado.filter(n=>n.value==2).length
    umbralAuditivo = checkeado.filter(n=>n.value==3).length
    console.log(umbralQuinestesico,umbralVisual,umbralAuditivo, ' son los results');
    console.log(checkeado, 'lo filtrado');
 
}


questionsContainer.addEventListener('click', ()=> {
    validationOptions()
    evaluacionGeneral(umbralQuinestesico, umbralVisual, umbralAuditivo)
    console.log('dentro de evento');
}) 
//questionsContainer.addEventListener('click',(e)=> evaluacionOpciones(e) )


const evaluacionGeneral =(umbralQuinestesico, umbralVisual, umbralAuditivo)=>{

    //for each ask sume los valores
console.log(umbralQuinestesico, umbralVisual, umbralAuditivo, 'a graficar');
let grafica = new Chart(canvasGrafica, {
    type:'bar',
    data:{
        labels:['Quinestesico', 'Visual', 'Auditivo'],
        datasets:[{
            label:'algo',
            data:[umbralQuinestesico, umbralVisual, umbralAuditivo]
        }]
    }
})
}
botonEvaluar.addEventListener('click', evaluacionGeneral(umbralQuinestesico, umbralVisual, umbralAuditivo))