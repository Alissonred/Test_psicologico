
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


const algo = ()=>{
    checkeado = [...arrayOpciones].filter(k=>k.checked == true)// array con lo seleccionado
    umbralQuinestesico = checkeado.filter(n=>n.value==1).length
    umbralVisual = checkeado.filter(n=>n.value==2).length
    umbralAuditivo = checkeado.filter(n=>n.value==3).length
    console.log(umbralQuinestesico,umbralVisual,umbralAuditivo, ' son los results');
    console.log(checkeado, 'lo filtrado');
  /*   arrayOpciones.forEach(n=>{// para todas las opc
        console.log(n.checked, 'es n');

    }) */



////////////////opc2///////////////////////////////////////////////////////////////////////////
    // arrayAsk.forEach(i=> { // array de grupo de opc por pregunta
    //     arrayOpcionesNodes= [...i.childNodes]// conversion a  array con 3 opc
    
    // })
    // console.log(arrayOpcionesNodes,'arrayOpcionesNodes');
    // checkeado = arrayOpcionesNodes.find(k=>k.checked == true)// busque de las 3opc cual se checkeo
    //     console.log(checkeado.value, 'checkeado');
    //     arrayOpcionesCheckeado.push(checkeado)
    //     // if(checkeado.value == 1){
    //     //     umbralQuinestesico++
    //     //     console.log(umbralQuinestesico, 'selecc a');
    //     // } else if(checkeado.value == 2){
    //     //     umbralVisual++
    //     //     console.log(umbralVisual,'selecc b');
    //     // }else if(checkeado.value == 3){
    //     //     umbralAuditivo++
    //     //     console.log(umbralAuditivo,'selecc c');
    //     // }else{
    //     //     console.log('selecciona todas');
    //     // }
    // console.log(arrayOpcionesCheckeado);
    // //arrayOpciones.forEach(i=> console.log(i, 'son los hijos'))
}

const aux = ()=>{
    
}



//const secc = document.getElementById(aski)

questionsContainer.addEventListener('click', algo) 
//questionsContainer.addEventListener('click',(e)=> evaluacionOpciones(e) )



/////detectar quien se selecc, detectar quien se deselecc
let arrRtas = []
const acum =(e)=>{
    arrRtas.push(e.target.value)/// se seleccionó
    ////se deselecciono
    ///sumar los del mismo nombre
}





const reasignacionunitaria = (Q,V,A)=>{
    umbralQuinestesico = Q
    umbralVisual = V
    umbralAuditivo = A
    console.log(umbralQuinestesico,umbralVisual, umbralAuditivo);
}

const reasignacion = (Q,V,A)=>{
    umbralQuinestesico += Q
    umbralVisual += V
    umbralAuditivo += A
    console.log(umbralQuinestesico,umbralVisual, umbralAuditivo);
}

const evaluacionOpciones =(e)=>{
    if(e.target.value == 1){
        reasignacionunitaria(1,0,0)
        console.log(e.target.name, 'etarget');

        console.log('se selecc:a');
    }else if (e.target.value == 2){
        reasignacionunitaria(0,1,0)
        console.log('se selecc:b');
        console.log(e.target.name, 'etarget');
    }else if (e.target.value == 3){
        reasignacionunitaria(0,0,1)
        console.log('se selecc:c');
        console.log(e.target.name, 'etarget');
    }else{
        console.log('selecciona una opc');
        console.log(e.target.name, 'etarget');
    }

}

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