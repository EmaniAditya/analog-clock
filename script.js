function updateClock() {
    
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; 
    const minuteDeg = minutes * 6; 
    const secondDeg = seconds * 6; 

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    hourHand.style.transform = `translateX(-50%) translateY(50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) translateY(50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) translateY(50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
