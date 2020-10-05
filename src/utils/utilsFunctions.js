function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


const randomColor = () => "#" + random(16, 255).toString(16) + random(16, 255).toString(16) + random(16, 255).toString(16)

export {randomColor}