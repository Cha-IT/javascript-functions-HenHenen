// Oppgave 1

function arealSirkel(radius){
    console.log(radius*radius*Math.PI)
}

arealSirkel(24)
arealSirkel(32)

// Oppgave 2

function volumKule(radius){
    console.log(4/3*radius*radius*Math.PI)
}

volumKule(11)
volumKule(21)

// Oppgave 3

function person(navn, alder){
    if (alder < 30) {
        console.log('Hei ' + navn + ', du er ung!')
    }

    else{
        console.log('Du er unc!')
    }
}

person(prompt('Hva heter du?'), prompt('Hvor gammel er du?'))
