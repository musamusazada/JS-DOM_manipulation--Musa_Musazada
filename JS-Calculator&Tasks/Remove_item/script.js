const options = [...document.querySelector("select").options];

options.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector("select").removeChild(item);
    })
});