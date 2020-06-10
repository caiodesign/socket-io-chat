import { resetInputValue, createChatMessage } from './utils.js'

(function (){
	const socket = io()

	function sendMessage (value) {
		socket.emit('chat message', value)
	}

	function addMessageListener (cb) {
		socket.on('chat message', msg => cb(msg))
	}


	function handleSubmit (e) {
		e.preventDefault()
		const input = document.querySelector('#input')
		sendMessage(input.value)
		resetInputValue(input)
	}

	function addSubmitListener () {
		const form =  document.querySelector('form')
		form.addEventListener('submit', handleSubmit)
	}


	
	function startEventListeners () {
		const chat = document.querySelector('#messages')
		
		addSubmitListener()
		addMessageListener(msg => createChatMessage(chat, msg))
	}

	window.addEventListener('load', startEventListeners, false)
})()