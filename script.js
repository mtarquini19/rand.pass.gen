const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppersElement = document.getElementById('includeUppers')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGenerator')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPER_CHAR_CODES = arrayLowToHigh(65, 90)
const LOWER_CHAR_CODES = arrayLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64)).concat(arrayLowToHigh(91, 96)).concat(arrayLowToHigh(123, 126))

characterAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppers = includeUppersElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = genPass(characterAmount, includeUppers, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function genPass(characterAmount, includeUppers, includeNumbers, includeSymbols) {
    let charCodes = LOWER_CHAR_CODES
    if (includeUppers) charCodes = charCodes.concat(UPPER_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(string.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
}