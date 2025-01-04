const envelope = document.querySelector('.envelope-wrapper');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

const letter = document.querySelector('.letter')
let firstTransition = true
letter.addEventListener('transitionend', () => {
    if (firstTransition) {
        firstTransition = false
    } else {
        window.location.href = 'index.html'
    }
})