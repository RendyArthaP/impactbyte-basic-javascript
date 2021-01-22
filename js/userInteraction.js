let name = prompt("Siapakah nama anda?")
let negara = prompt("Dari negara mana anda berasal")


if (!name || !negara ) {
  alert('Please input your data')
} else if (name !== 'Rendy') {
  alert('Sorry you are not Mr. Rendy')
} else if (negara !== 'Indonesia') {
  alert('Sorry you are not Indonesian People')
} else if (name === 'Rendy' || negara === 'Indonesia'){
  alert('Hello Mr. Rendy From Indonesia. Thanks for coming')
  console.log(name, negara)
}

/*Statement ini dibuat hanya untuk login dengan name === Rendy dan negara === Indonesia */