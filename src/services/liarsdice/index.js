const DICE_INCUP = 5
const players = 8

const getDistribution = (arr, wild = true) => {
  const dist = new Array(6).fill(0)
  arr.forEach((v) => {
    if (wild && v == 1) {
      // Wild card
      for (let i = 0; i < dist.length; i++) {
        dist[i]++
      }
    } else {
      dist[v - 1]++
    }
  })
  // Special rule 1
  // TODO Flush dice 0
  if (wild && dist[0] >= 2) {
    for (let i = 1; i < dist.length; i++) {
      if (dist[i] != dist[0]) {
        // If this num exists
        // TODO Check whether dist[i] = players is correct
        dist[i] = players
      }
    }
  }
  return dist
}

// const exp = new Array(players).fill(0)
const overallDist = new Array(6).fill(0)
const trial = () => {
  // Dice initial
  const dicePool = new Array(players - 1)
  for (let i = 0; i < dicePool.length; i++) {
    dicePool[i] = new Array(DICE_INCUP)
    for (let j = 0; j < DICE_INCUP; j++) {
      dicePool[i][j] = 1 + Math.floor(6 * Math.random())
    }
  }
  // const mydice = [1, 1, 5, 2, 3]
  // dicePool.push(mydice)
  dicePool.forEach((p) => {
    for (let i = 0; i < 6; i++) {
      overallDist[i] += getDistribution(p)[i]
    }
  })
}

export default getDistribution
