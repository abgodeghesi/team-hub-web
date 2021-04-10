const randomizer = Object.defineProperty(Array.prototype, 'randomizer', {
  value: function (x5OfHue) {
    var array = this;
    array.sort(function (a, b) {
      return 0.5 - Math.random();
    });
    return [].concat.apply(
      [],
      array.map(function (elem, i) {
        return i % x5OfHue ? [] : [array.slice(i, i + x5OfHue)];
      })
    );
  },
});

export { randomizer };
