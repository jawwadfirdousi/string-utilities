function updateOutput(result) {
    document.getElementById('outputArea').value = result;
}

function toLowercase() {
    const input = document.getElementById('inputArea').value;
    updateOutput(input.toLowerCase());
}

function toUppercase() {
    const input = document.getElementById('inputArea').value;
    updateOutput(input.toUpperCase());
}

function reverseString() {
    const input = document.getElementById('inputArea').value;
    updateOutput(input.split('').reverse().join(''));
}

function countCharacters() {
    const input = document.getElementById('inputArea').value;
    updateOutput(`Character count: ${input.length}`);
}

function countWords() {
    const input = document.getElementById('inputArea').value;
    const wordCount = input.trim().split(/\s+/).length;
    updateOutput(`Word count: ${wordCount}`);
}

function splitString() {
    const input = document.getElementById('inputArea').value;
    const delimiter = document.getElementById('splitDelimiter').value;
    const keepEmpty = document.getElementById('keepEmpty').checked;
    
    let splitResult;
    if (delimiter === '') {
        splitResult = input.split('');
    } else {
        splitResult = input.split(new RegExp(delimiter));
    }
    
    if (!keepEmpty) {
        splitResult = splitResult.filter(token => token !== '');
    }
    
    updateOutput(JSON.stringify(splitResult, null, 2));
}