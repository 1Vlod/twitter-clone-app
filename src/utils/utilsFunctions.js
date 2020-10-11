function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const randomColor = () => "#" + random(16, 255).toString(16) + random(16, 255).toString(16) + random(16, 255).toString(16)

function getTimeString(date) {
  return `${date.getHours()}:${date.getMinutes()} • ${date.getDate()}:${date.getMonth() + 1}`
}


export {randomColor, getTimeString}