const button = document.querySelectorAll('button')
const main_text = document.querySelector('#main_text')
const sub_text = document.querySelector('#sub_text')
const numbers = '0123456789'.split('')
const operator = '+-x/'.split('')
let result

main_text.innerText =  sub_text.innerText = '0'

for (const element of button){
    if (numbers.includes(element.innerText)){
        element.addEventListener('click', ()=>{
            if (main_text.innerText != '0'){
                main_text.innerText += element.innerText
            }
            else{
                main_text.innerText = element.innerText
            }
        })
    }

    else if (operator.includes(element.innerText)){
        element.addEventListener('click', ()=>{
            if (main_text.innerText != '0'){
                main_text.innerText += element.innerText
            }
        })
    }

    else if (element.innerText == 'RESULT'){
        element.addEventListener('click', ()=>{
            if (eval(main_text.innerText) == main_text.innerText){
                alert ('Invalid expression')
            }
            else{
                sub_text.innerText = main_text.innerText
                main_text.innerText = eval(main_text.innerText).toString()
            }
        })
    }
}