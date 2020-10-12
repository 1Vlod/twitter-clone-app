function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const randomColor = () => "#" + random(16, 255).toString(16) + random(16, 255).toString(16) + random(16, 255).toString(16)


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function getTimeString(date) {
  return `${date.getHours()}:${date.getMinutes()} • ${date.getDate() + " " + months[date.getMonth() + 1]}`
}


export {randomColor, getTimeString}