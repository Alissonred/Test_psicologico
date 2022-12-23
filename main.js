
const questionsContainer= document.querySelector('.questionsContainer')
const resultsWrite = document.querySelector('.about')
const canvasGrafica = document.getElementById('miGrafica').getContext('2d')
let containerAsk
let containerOptions
let umbralQuinestesico=0
let umbralVisual=0
let umbralAuditivo=0
let askIndex = 0
let opcIndex = 0
let arrayOpciones=[]
let checkeado
let resultados

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
    opcIndex = 0
    containerAsk.append(enunciadoAsk,containerOptions)
    questionsContainer.append(containerAsk)
})




const validationOptions = ()=>{
    checkeado = [...arrayOpciones].filter(k=>k.checked == true)// array con lo seleccionado
    umbralQuinestesico = checkeado.filter(n=>n.value==1).length
    umbralVisual = checkeado.filter(n=>n.value==2).length
    umbralAuditivo = checkeado.filter(n=>n.value==3).length
    console.log(umbralQuinestesico,umbralVisual,umbralAuditivo, ' son los results');
    console.log(checkeado, 'lo filtrado');
 
}

// const predominancia= (umbralQuinestesico, umbralVisual, umbralAuditivo)=>{
//  if(Math.max(umbralQuinestesico, umbralVisual, umbralAuditivo) == umbralQuinestesico){
//     return 'quinestesico'
//  }
//  if(Math.max(umbralQuinestesico, umbralVisual, umbralAuditivo) == umbralVisual){
//     return 'Visual'
//  }
//  if(Math.max(umbralQuinestesico, umbralVisual, umbralAuditivo) == umbralAuditivo){
//     return 'auditivo'
//  }
//  return 'combinación'
 
//  }

questionsContainer.addEventListener('click', ()=> {
    validationOptions()
    evaluacionGeneral(umbralQuinestesico, umbralVisual, umbralAuditivo)
    //predominancia(umbralQuinestesico, umbralVisual, umbralAuditivo)
    console.log('dentro de evento');
}) 


const evaluacionGeneral =(umbralQuinestesico, umbralVisual, umbralAuditivo)=>{
console.log(umbralQuinestesico, umbralVisual, umbralAuditivo, 'a graficar');
let grafica = new Chart(canvasGrafica, {
    type:'bar',
    data:{
        labels:['Quinestesico', 'Visual', 'Auditivo'],
        datasets:[{
            label:'Tipos de aprendizaje',
            data:[umbralQuinestesico, umbralVisual, umbralAuditivo,0]
        }]
    }
})
}

// const title = document.createElement('h2')
// title.textContent = 'Resultados'
// const parrafo = document.createElement('p')
// parrafo.textContent = `Felicidades!!, eres una persona con umbral de aprendizaje ..............., donde predomina el tipo ${predominancia(umbralQuinestesico, umbralVisual, umbralAuditivo)}`
// resultsWrite.append(title, parrafo)
