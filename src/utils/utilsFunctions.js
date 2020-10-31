function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const randomColor = () => "#" + random(16, 255).toString(16) + random(16, 255).toString(16) + random(16, 255).toString(16)


const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function getTimeString(date) {
  return `
  ${createTwoSymbolsNumber(date.getHours())}:${createTwoSymbolsNumber(date.getMinutes())} • 
  ${createTwoSymbolsNumber(date.getDate()) + " " 
  + months[date.getMonth()]}`
}

function createTwoSymbolsNumber(num) {

  if (num.toString().length > 1) {
    return num
  } 
  
  return "0" + num 
}

function includesChecker(user, item, arrayName) {
  return user[arrayName]?.includes(item)
}

export {randomColor, getTimeString, includesChecker}