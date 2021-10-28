window.addEventListener('resize', () => {
    document.querySelector('p').innerText = `${window.innerWidth} x ${window.innerHeight}`;
})