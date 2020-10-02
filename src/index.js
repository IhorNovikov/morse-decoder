const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const decode = (expr) => {
    let arr = []
    for (let i = 0; i < expr.length; i += 10) {
        arr.push([...expr].slice(i, i + 10));
    }
    arr = arr.map(i => i.join('')).map(i => i.replace(/10/g, '.').replace(/11/g, '-').replace(/\*+/g, ' ').replace(/0+/, ''))
    for (const [key, value] of Object.entries(MORSE_TABLE)) {
        for (let j = 0; j < arr.length; j++) {
            arr[j] === key ? arr[j] = value : null
        }
    }
    return arr.join('')
}

module.exports = {
    decode
}