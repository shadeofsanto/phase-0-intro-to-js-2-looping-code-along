function writeCards(name, value){
    let myArray=[]
    for(let i=0; i < name.length; i++) {
        myArray.push(`Thank you, ${name[i]}, for the wonderful ${value} gift!`)}
    return myArray
}

function countDown(number) {
    while (number >=0) {
        console.log (number)
        number --
    }
}