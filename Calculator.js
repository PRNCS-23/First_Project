// ACCESING ALL BUTTON
let plusMinus = document.getElementById('PM') // FOR PLUS MINUS +/-
let persentage = document.getElementById('persent') //FOR PERSENTAGE %
let Divide = document.getElementById('Div') // FOR DIVISION
let Multiplication = document.getElementById('Multi') // FOR MULTIPLICATION
let Buttons = document.querySelectorAll('.B') // FOR ALL OTHER BUTTON

// MAKING A STRING WHICH WILL CALCULATE 
let string = ""

// APPLYING ADD EVENTLISTNER TO ALL BUTTON AND FULL LOGIC
Array.from(Buttons).forEach( (Button) => {
    Button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string)
            document.querySelector('input').value = string
        }else if(e.target.innerHTML == "AC"){
            string = ""
            document.querySelector('input').value = string
        }else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string
        }
    })
})
Multiplication.addEventListener('click', () => {
    string = string + "*"
    document.querySelector('input').value = string
}) 
Divide.addEventListener('click', () => {
    string = string + "/"
    document.querySelector('input').value = string
})