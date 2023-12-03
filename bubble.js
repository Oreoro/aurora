document.getElementById('bubble-container').addEventListener('mouseover', function(event) {
    var size = Math.floor(Math.random() * 200) + 50;
    var positionX = event.pageX;
    var positionY = event.pageY;
    
    var bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = positionX - size / 2 + 'px';
    bubble.style.top = positionY - size / 2 + 'px';
    
    // Assign a random color to the bubble
    var colors = ['rgba(255,100,100,0.7)', 'rgba(100,255,100,0.7)', 'rgba(100,100,255,0.7)', 'rgba(255,255,100,0.7)'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.background = `radial-gradient(circle, ${randomColor} 0%, rgba(0,212,255,0.7) 100%)`;

    // Add different duration to the animation
    bubble.style.animationDuration = (Math.random() * 3 + 2) + 's';

    document.getElementById('bubble-container').appendChild(bubble);
    
    // remove the bubble after the animation ends
    bubble.addEventListener('animationend', function() {
        bubble.remove();
    });
});