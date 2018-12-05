var x = 0;
var y = 20;
let drop;
function setup(){
  noCanvas();
  drop = select("#drop");
  drop.option('hi');
}
function draw() {
  background(255);
  createP(drop.value());
  let link = select("#link");
  let w = select("#w");
  let h = select("#h");
  let a = select("#1");
  let b = select("#2");
  let c = select("#3");
  let d = select("#4");
  let e = select("#5");
  let f = select("#6");
  let g = select("#7");
  let i = select("#8");
  let link2 = link.value();
  let w2 = w.value();
  let h2 = h.value();
  let final = "<img href=" + link2 + " width=" + w2 + "px" + ">";
  link.attribute('placeholder',drop.value()+' link');
  a.html(drop.value());
  b.html(link2);
  c.html(" width=");
  d.html(w2);
  f.html("height=");
  g.html(h2);
}
