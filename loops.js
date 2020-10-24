function vowelsAndConsonants(s) {
    let vowelsAndConsonants = [];
    let vowels = 'aeiou';

    for ( let vowel of s ) {
        if( vowels.indexOf(vowel) !== -1 ) {
            vowelsAndConsonants.push(vowel);
        }
    }

    for ( let consonant of s ) {
        if( vowels.indexOf(consonant) === -1 ) {
            vowelsAndConsonants.push(consonant);
        }
    }

    for ( let letter of vowelsAndConsonants ) {
        console.log(letter);
    } 
}
