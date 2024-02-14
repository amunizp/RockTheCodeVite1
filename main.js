import './style.css'
let colorPicker
const defaultColor = '#564d65' //overwrites what is on the HTML?

const COLOR_PALETTE = {
  '#1a181b': 'Raisin black',
  '#564d65': 'English Violet',
  '#3e8989': 'Dark cyan',
  '#2cda9d': 'Emerald',
  '#05f140': 'Erin'
}
const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option')
    option.value = color
    option.innerText = COLOR_PALETTE[color]
    colorPickerSelect.append(option)
  })
}
const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')

  colorPickerSelect.addEventListener('change', (event) => {
    const newColor = event.target.value
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor
    //Le aplicamos el background color con el código de color seleccionado
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-'
  })
}
// const addEventListenerToColorInput = () => {
//   const colorPickerInput = document.querySelector('#color-input')
//   colorPickerInput.value = defaultColor
//   colorPickerInput.addEventListener('input', updateFirst, false)
//   colorPickerInput.addEventListener('change', updateAll, false)
//   colorPickerInput.select()
// }
window.addEventListener('load', startup, false)
function startup() {
  colorPicker = document.querySelector('#color-text')
  colorPicker.value = defaultColor
  //colorPicker.addEventListener('change', updateAll, false)
  colorPicker.addEventListener('input', updateFirst, false)
  colorPicker.addEventListener('change', updateAll, false)
  colorPicker.select()
}

function updateFirst(event) {
  const p = document.querySelector('p')
  if (p) {
    p.style.color = event.target.value
  }
}
function updateAll(event) {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = event.target.value
  })
  //const colorNameText = `${event.target.value}`
  labelText.innerText = event.target.value
}

addOptionsToColorPicker()
addEventListenerToColorPicker()
