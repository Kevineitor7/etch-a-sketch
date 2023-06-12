const container = document.querySelector('.container')
const value = document.querySelector('.input-value')
const value2 = document.querySelector('.input-value2')
const slider = document.querySelector('#slider')
const checkbox = document.querySelector('#checkbox')
const checkboxColors = document.querySelector('#checkbox2')
const colors = ['aqua', 'beige', 'blueviolet', 'blue', 'brown', 'coral', 
'darkblue', 'gold', 'green', 'hotpink', 'lime', 'magenta', 'navy', 'olive', 
'orange', 'orchid', 'plum', 'purple', 'red', 'skyblue', 'yellow', 'turquoise']

value.textContent = slider.value
value2.textContent = slider.value

grid(16)

slider.addEventListener("mousemove", (e) => {
    value.innerHTML = e.target.value
    value2.innerHTML = e.target.value
})

slider.addEventListener("change", (e) => {
    value.innerHTML = e.target.value
    value2.innerHTML = e.target.value   
    grid(e.target.value)
})

function grid(size) {

    container.innerHTML = ''
    checkbox.checked = false
    checkboxColors.checked = false

    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (i = 0; i < (size * size); i++) {
        let cell = document.createElement('div')
        container.appendChild(cell)
        cell.addEventListener('mouseover', () => {
            if (checkboxColors.checked) {
              cell.style.setProperty("background-color", randomColor())
            } else {
              cell.style.setProperty("background-color", "black")
            } 
        })
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                cell.classList.add('grid')
            } else {
                cell.classList.remove('grid')
            }
        })
    }
}

function randomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)] 
    return color
    }




