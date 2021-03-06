// Passar funcoes como parametros de outra funcao
// Otimo para programacao assincrona
var callback = function () {
  console.log('Done!')
}
setTimeout(callback, 5000)

setTimeout(() => console.log('Done!'), 5000)

function useCallback (callback) {
  callback(1)
  callback(2)
  callback(3)
}

useCallback(sentence => console.log(sentence))
