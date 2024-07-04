const input = document.getElementById('Input')
const Button = document.getElementById('addToList')

const list = []
let count = 0
const ol = document.getElementById('Iteratable')

Button.addEventListener('click', () => {
    list.push(input.value)
    const listElement = list.filter( () => list)
    const li = document.createElement('li')
    li.textContent = listElement[count]
    ol.appendChild(li)
    count++
})
