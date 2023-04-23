const button = document.getElementById('sortear');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('n1').value);
    const max = parseInt(document.getElementById('n2').value);

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    if (isNaN(result)) {
        result = 'Valor inválido';
    }

    document.querySelector('#result > span').textContent = result;
});