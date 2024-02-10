document.getElementById('convert').addEventListener('click', function () {
    var degrees = document.getElementById('degrees').value;
    var tempType = document.getElementById('tempType').value;
    var result;

    if (tempType == 'celsius') {
        result = (degrees * 9 / 5) + 32;
        document.getElementById('result').innerHTML = result.toFixed(2) + ' °F';
    } else {
        result = (degrees - 32) * 5 / 9;
    }
})