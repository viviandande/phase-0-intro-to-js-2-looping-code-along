// Code your solutions in this file
function writeCards(names, message){
    let messages = []
for (const name of names){
 messages.push (`Thank you, ${name}, for the wonderful ${message} gift!`)
}
    // the argument(message) is what is interpoalate and messages is pushed
return messages
}

function countDown(n){
for(let count = n; count >= 0; count--){
    console.log (count)
}
}
