function scrollTop () {
    window.scrollTo(0, document.body.scrollHeight);
}

export function resetInputValue (element) {
    element.value = ''
}

export function createChatMessage (chat, content) {
    const element = document.createElement('li')
    element.textContent = content
    
    chat.appendChild(element)
    scrollTop()
}