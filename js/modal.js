export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('h2 span'),
    buttonClose: document.querySelector('h2 button'),
    
    open() {
        Modal.wrapper.classList.add('open');
    },
    close() {
        Modal.wrapper.classList.remove('open');
    }

}

Modal.buttonClose.onclick = () => {
    Modal.close();
}

function handleKeyDown(event) {
    if (event.key === 'Escape') {
        Modal.close();
    }
}

window.addEventListener('keydown', handleKeyDown);
