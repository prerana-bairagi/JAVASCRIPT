function updateClock() {
    const now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add leading zeros if needed
    hours = hours.toString().padStart(3, '0');
    minutes = minutes.toString().padStart(3, '0');
    seconds = seconds.toString().padStart(3, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    // Display in HH:MM:SS format
}

// Update clock immediately, then every second
updateClock();
setInterval(updateClock, 1000);