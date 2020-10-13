// define variables
var characterAmountNumber = document.getElementById("characterAmount")
var includeUppersElement = document.getElementById("includeUppers")
var includeNumbersElement = document.getElementById("includeNumbers")
var includeSymbolsElement = document.getElementById("includeSymbols")
var form = document.getElementById("passwordGenerator")
var passwordDisplay = document.getElementById("passwordDisplay")

var UPPER_CHAR_CODES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var LOWER_CHAR_CODES = "abcdefghijklmnopqrstuvwxyz".split("")
var NUMBER_CHAR_CODES = "1234567890".split("")
var SYMBOL_CHAR_CODES = "!@#$%^&*()?".split("")

// add "copy to clipboard" button
// edit password screen to fit entire password

// get info from user inputs
form.addEventListener("submit", e => {
    e.preventDefault()
    var characterAmount = characterAmountNumber.value
    var includeUppers = includeUppersElement.checked
    var includeNumbers = includeNumbersElement.checked
    var includeSymbols = includeSymbolsElement.checked
    var password = genPass(characterAmount, includeUppers, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

// create function to randomly generate password based off user inputs
function genPass(characterAmount, includeUppers, includeNumbers, includeSymbols) {
    let charCodes = LOWER_CHAR_CODES
    if (includeUppers) charCodes = charCodes.concat(UPPER_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    
    var passwordCharacters = []
    for (let i = 0; i < characterAmount; i++){
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        console.log(characterCode)
        passwordCharacters.push(characterCode)
    }
    return passwordCharacters.join('')
}