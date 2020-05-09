/**
 * User: CHT
 * Date: 2020/5/9
 * Time: 9:11
 */


function vectorFromPoints(pointA, pointB) {
  return [pointB[0] - pointA[0], pointB[1] - pointA[1]]
}

function angleFrom(vector) {
  return 180 - Math.round(180 / Math.PI * Math.atan2(vector[1], vector[0]))
}

const vector = vectorFromPoints([25, 10], [50, 20])

// console.log(angleFrom(vector))
console.log(angleFrom([-10, 10]))
console.log(angleFrom([10, 10]))
console.log(angleFrom([10, -10]))
console.log(angleFrom([-10, -10]))
