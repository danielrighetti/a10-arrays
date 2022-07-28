const arrayNum = [21, 10, 1985, 0, 40]
const arrayStrin = ["dia", "mes", "ano", "hora", "minutos"]
const arrayMix = [36, "idade", true]

const arrayNumCopia = arrayNum.slice()
arrayNumCopia.push(100)

console.log('Array Num Original', arrayNum)
console.log('Array Num Copia', arrayNumCopia)

//

const arrayStrinCopia = arrayStrin.slice()
arrayStrinCopia.pop()

console.log('Array Strin Original', arrayStrin)
console.log('Array Strin Copia', arrayStrinCopia)

//

const arrayMixCopia = arrayMix.slice()
arrayMixCopia.splice(1,1)

console.log('Array Mix Original', arrayMix)
console.log('Array Mix Copia', arrayMixCopia)



