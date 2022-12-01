// 3D scroll

let zSpacing = -1000,
 lastPos = zPacing / 5
 $frames = document.getElementsByClassName('frame'),
 frame = Array.from($frames), 
 zVals = []




 window.onscroll = fucntion() {
 let top = document.documentElement.scrollTop,
     delta = lastPos - top

 lastPos = top
 
 frames.forEach(function(n, i) {
  zVals.push((i * zSpacing) + zSpacing)
  zVals[i] += delta * -5
 })
 }