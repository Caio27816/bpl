function need(level) {
  var xp = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];
  return xp[level-1];
}

module.exports = {
  need:need
}