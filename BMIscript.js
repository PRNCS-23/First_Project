const Form = document.querySelector('form');

Form.addEventListener('submit', (e)=>{
    e.preventDefault() // to prevent form going directly to database

    const Height = parseInt(document.querySelector('#Height').value);
    const Weight = parseInt(document.querySelector('#Weight').value);
    const Result = document.querySelector('#Result');

    const Bmi = (Weight/((Height * Height) / 1000)).toFixed(2);

    Result.innerHTML = `<span>${Bmi}</span>`
})