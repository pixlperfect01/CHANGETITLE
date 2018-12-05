let p;
let atag;
let h1;
let h2;
let tt;
let ttc;
let radio;
let product;
  let finalproduct;
  let txt;
  let txt2;
let strong;
  let mark;
  let i;
  let underline;
let idbox;
let idid;
let iddiv;
function setup(){
  noCanvas();
  iddiv = select("#iddiv");
  idbox = select("#idbox");
  idid = select("#idid");
  strong = select("#strong");
  mark = select("#mark");
  i = select("#i");
  underline = select("#underline");
  product = select("#product");
  finalproduct = select("#finalproduct");
  
  radio = createSelect();
  radio.option('paragraph','p');
  radio.option('hyperlink','a');
  radio.option('quotes','q');
  radio.option('heading 1','h1');
  radio.option('heading 2','h2');
  radio.option('heading 3','h3');
  p = select("#p");
  atag = select("#a");
  h1 = select("#h1");
  h2 = select("#h2");
  tt = select("#tt");
  ttc = select("#ttc");
}

  
function draw() {
  background(255);
  txt = select("#txt");
  txt2 = txt.value();
  let tc = select("#tc");
  let st = select("#st");
  let mk = select("#mk");
  let it =  select("#it");
  let ul = select("#ul");
  let stc = select("#stc");
  let mkc = select("#mkc");
  let itc = select("#itc");
  let ulc = select("#ulc");
  let href = select("#href");
  let hyper = select("#hyper");
  let product = select("#product");
  let finalproduct = select("#finalproduct");
  let strong = select("#strong");
  let mark = select("#mark");
  let i = select("#i");
  let underline = select("#underline");
	if(strong.checked()){
    st.show();
    stc.show();
  }else{
    st.hide();
    stc.hide();
  }
if(mark.checked()){
    mk.show();
    mkc.show();
  }else{
    mk.hide();
    mkc.hide();
  }
if(i.checked()){
    it.show();
    itc.show();
  }else{
    it.hide();
    itc.hide();
  }
if(underline.checked()){
    ul.show();
    ulc.show();
  }else{
    ul.hide();
    ulc.hide();
  }
  
  if(radio.value() === 'a'){
    href.show();
    tt.html('&lt;'+radio.value()+' href=&quot;'+hyper.value()+'&quot;');
    ttc.html('&lt;/'+radio.value()+'&gt;');
  }else{
    href.hide();
    tt.html('&lt;'+radio.value());
    ttc.html('&lt;/'+radio.value()+'&gt;');
  }
  tc.html(txt2);
  if(idbox.checked()){
    iddiv.show();
    tt.html(tt.html()+' id=&quot;'+idid.value()+'&quot');
  }else{
    iddiv.hide();
  }
  tt.html(tt.html()+'&gt;');
}
function temp(){
  product.html('');
  product.html('<'+radio.value()+'>');
  if(strong.checked())
    product.html(product.html()+'<strong>');
  if(mark.checked())
    product.html(product.html()+'<mark>');
  if(i.checked())
    product.html(product.html()+'<i>');
  if(underline.checked())
    product.html(product.html()+'<u>');
  product.html(product.html()+txt.value());
  if(strong.checked())
    product.html(product.html()+'</strong>');
  if(mark.checked())
    product.html(product.html()+'</mark>');
  if(i.checked())
    product.html(product.html()+'</i>');
  if(underline.checked())
    product.html(product.html()+'</u>');
  product.html('</'+radio.value()+'>');
  finalproduct.html(product.html());
}
