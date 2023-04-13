Array.prototype.last = function (callback) {
  return this.length === 0 ? -1 : this[this.length - 1]
}
