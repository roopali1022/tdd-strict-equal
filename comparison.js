const strictEqual = (val1, val2) => {
  return val1 == val2 && typeof val1 == typeof val2
}

module.exports = strictEqual

