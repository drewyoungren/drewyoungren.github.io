const b1 = JXG.JSXGraph.initBoard("jxgbox", {
  boundingbox: [-5, 5, 5, -5],
  axis: true,
});
var v = b1.create("point", [2, 2], { size: 3, name: "v" });
var w = b1.create("point", [-2, 1], { size: 3, name: "w" });
var va = b1.create("line", [[0, 0], v], {
  straightFirst: false,
  straightLast: false,
  lastArrow: true,
});
var wa = b1.create("line", [[0, 0], w], {
  straightFirst: false,
  straightLast: false,
  lastArrow: true,
});
v.

// var compwv = JXG.Math.innerProduct(v, w) ;
// var t = b1.create("text", [-4, -2, () => {JXG.Math.innerProduct(v, w)}]);
