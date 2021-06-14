export default ({ Vue }) => {
	Vue.filter('real', (valor) => {
		valor = parseFloat(valor)
		return 'R$ '+ valor.toFixed(2)
	})
	Vue.filter('maiusculas', (texto) => {
		return texto.toUpperCase()
	})
}