// 
const arrayNum = [21, 10, 1985, 0, 40]
const arrayStrin = ["dia", "mes", "ano", "hora", "minutos"]
const arrayMix = [36, "idade", true]

console.log(arrayNum.length)
console.log(arrayStrin.length)
console.log(arrayMix.length)

// console.log(arrayNum[0], arrayStrin[1], arrayMix[2]) ou

const primItemArrysUm = arrayNum[0]
const segItemArrayDois = arrayStrin[1]
const tercItemArrayTres = arrayMix[2]

console.log(primItemArrysUm, segItemArrayDois, tercItemArrayTres)

//

// console.log(arrayNum.includes(1985), arrayMix.includes("Idade"))

const infoBoleArrNum = arrayNum.includes(1985)
const infoBoleArrMix = arrayMix.includes("Idade")

console.log(infoBoleArrNum)
console.log(infoBoleArrMix)





