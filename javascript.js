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
        window.location.href = 'https://www.youtube.com/watch?v=9vc2r0s6M_M&list=RD9vc2r0s6M_M&start_radio=1&ab_channel=Neobrane'
    }
})