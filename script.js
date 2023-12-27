document.getElementById('gift-container').addEventListener('click', function () {
    showFireworks();
});

function showFireworks() {
    var fireworks = document.getElementById('fireworks');
    fireworks.style.display = 'block';

    // Create multiple fireworks particles
    for (var i = 0; i < 5; i++) {
        createFirework();
    }

    // Reset the display after a short delay
    setTimeout(function () {
        fireworks.style.display = 'none';
    }, 3000); // Adjust the delay as needed
}

function createFirework() {
    var fireworks = document.getElementById('fireworks');
    var firework = document.createElement('div');
    firework.classList.add('firework');

    // Randomize position within the fireworks container
    var xPos = Math.random() * 100;
    var yPos = Math.random() * 100;

    firework.style.left = xPos + 'vw';
    firework.style.top = yPos + 'vh';

    fireworks.appendChild(firework);
}
