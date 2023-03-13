function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
const rndInt = randomIntFromInterval(1, 4)
console.log(rndInt);

let background = document.getElementById('backgroundColor');

if (rndInt == 1) {
    background.style.background = 'linear-gradient(to bottom, #7097FF 0%, #1C259F 100%)';
} else if (rndInt == 2) {
    background.style.background = 'linear-gradient(to bottom, #1C259F 0%, #7097FF 100%)';
} else if (rndInt == 3) {
    background.style.background = 'linear-gradient(to bottom, #49FDB4 0%, #166546 100%)';
} else {
    background.style.background = 'linear-gradient(to bottom, #166546 0%, #49FDB4 100%)';
}