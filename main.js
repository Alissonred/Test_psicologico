
const questionsContainer = document.querySelector('.questionsContainer')
const resultsWrite = document.querySelector('.about')
const canvasGrafica = document.getElementById('miGrafica').getContext('2d')
let containerAsk
let containerOptions
let umbralQuinestesico = 0
let umbralVisual = 0
let umbralAuditivo = 0
let askIndex = 0
let opcIndex = 0
let arrayOpciones = []
let checkeado
let resultados
let askCollection = []

class Question {
    constructor(enunciado, opciones) {
        this.enunciado = enunciado,
            this.opciones = opciones
    }
}

const preguntas = [{ enunciado: '1.	Usualmente comprendes más información cuando se encuentra plasmada en', opcionA:'Cifras, gráficos y/o elementos visuales.',opcionB:'Podcast o audios.',opcionC:'Ejemplos muy detallados aplicables a la vida real.' }, { enunciado: '2.	Cuando escribes tus apuntes2.	Cuando escribes tus apuntes', opcionA:'Usas flechas, cuadros, dibujos, líneas, palabras claves, sin extender los apuntes.',opcionB:'Usualmente sólo escribes textos largos, pero sin ir al detalle.',opcionC:'Escribes frases muy detalladas para entender a específicamente la información.' }, { enunciado: '3.	Usualmente al conversar con otras personas en el entorno laboral o personal ¿qué palabras usas con más frecuencia al realizar una solicitud?', opcionA:'Muéstrame, quiero ver, percibo que…',opcionB:'Cuéntame, dime, quiero escuchar…. ',opcionC:'Ninguna de las anteriores' }, { enunciado: '4.	Cuando estabas en etapas escolares y debías aprender un concepto rápidamente porque en pocos minutos iniciaba el examen, qué era lo primero que venía a tu mente durante la evaluación:', opcionA:'Las cifras y los gráficos que el profesor te enseñó de ese concepto.',opcionB:'La frase que te inventaste como estrategia de mnemotecnia (“Procedimiento de asociación mental para facilitar el recuerdo de algo”) para recordar el concepto durante el examen. ',opcionC:'El ejemplo que el profesor te dio sobre el concepto porque éste era aplicable o parecido a la vida real.' }]

let question_1 = new Question(preguntas[0].enunciado, [preguntas[0].opcionA, preguntas[0].opcionB, preguntas[0].opcionC]);
let question_2 = new Question(preguntas[1].enunciado, [preguntas[1].opcionA, preguntas[1].opcionB, preguntas[1].opcionC]);
let question_3 = new Question(preguntas[2].enunciado, [preguntas[2].opcionA, preguntas[2].opcionB, preguntas[2].opcionC]);
let question_4 = new Question(preguntas[3].enunciado, [preguntas[3].opcionA, preguntas[3].opcionB, preguntas[3].opcionC]);

// preguntas.forEach(i=>{
//     console.log(i.enunciado, 'es eneuciado');
//     let question = new Question(preguntas[i].enunciado, [preguntas[i].opcionA, preguntas[i].opcionB, preguntas[i].opcionC1])
//     console.log(question,'es question');
//     //askCollection.push()
// })

 askCollection = [question_1, question_2, question_3, question_4];

askCollection.forEach(ask => {
    askIndex++
    containerAsk = document.createElement('article')
    containerOptions = document.createElement('section')
    containerOptions.id = `ask${askIndex}`
    containerOptions.classList = 'containerOpc'
    const enunciadoAsk = document.createElement('p')
    enunciadoAsk.textContent = ask.enunciado
    ask.opciones.forEach(opc => {
        opcIndex++
        const opcionTexto = document.createElement('label')
        opcionTexto.for = `ask${askIndex}${opcIndex}`
        opcionTexto.classList='labelOpc'
        const opcionTextoInt = document.createElement('p')
        opcionTextoInt.textContent = opc
        const opciones = document.createElement('input')
        opciones.type = 'radio'
        opciones.name = `ask${askIndex}`
        opciones.value = opcIndex
        opciones.id = `ask${askIndex}${opcIndex}`
        opciones.required
        opcionTexto.append(opciones, opcionTextoInt)
        containerOptions.append(opcionTexto)
        arrayOpciones.push(opciones)
    })
    opcIndex = 0
    containerAsk.append(enunciadoAsk, containerOptions)
    questionsContainer.append(containerAsk)
})




const validationOptions = () => {
    checkeado = [...arrayOpciones].filter(k => k.checked == true)// array con lo seleccionado
    umbralQuinestesico = checkeado.filter(n => n.value == 1).length
    umbralVisual = checkeado.filter(n => n.value == 2).length
    umbralAuditivo = checkeado.filter(n => n.value == 3).length
    console.log(umbralQuinestesico, umbralVisual, umbralAuditivo, ' son los results');
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

questionsContainer.addEventListener('click', () => {
    validationOptions()
    evaluacionGeneral(umbralQuinestesico, umbralVisual, umbralAuditivo)
    //predominancia(umbralQuinestesico, umbralVisual, umbralAuditivo)
    console.log('dentro de evento');
})


const evaluacionGeneral = (umbralQuinestesico, umbralVisual, umbralAuditivo) => {
    console.log(umbralQuinestesico, umbralVisual, umbralAuditivo, 'a graficar');
    let grafica = new Chart(canvasGrafica, {
        type: 'bar',
        data: {
            labels: ['Quinestesico', 'Visual', 'Auditivo'],
            datasets: [{
                label: 'Tipos de aprendizaje',
                data: [umbralQuinestesico, umbralVisual, umbralAuditivo, 0]
            }]
        }
    })
}

// const title = document.createElement('h2')
// title.textContent = 'Resultados'
// const parrafo = document.createElement('p')
// parrafo.textContent = `Felicidades!!, eres una persona con umbral de aprendizaje ..............., donde predomina el tipo ${predominancia(umbralQuinestesico, umbralVisual, umbralAuditivo)}`
// resultsWrite.append(title, parrafo)
