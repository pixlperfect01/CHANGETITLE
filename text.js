let iframe;
		  let framef;

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
let stylebox;
let stylestyle;
let stylediv;
let classbox;
let classdiv;
let classclass;
let hyperselect;
let downloadbox;
let downloaddiv;
let downloadinpt;
let downdiv;
let hrefbox;
let hrefdiv;
let fontsize;
let fntsizbox;
let fontsizediv;
let fntsizinpt;
let fontclr;
let fntclrbox;
let fontclrdiv;
let fntclrinpt;
let sub;
let sup;
let sml;
let subc;
let supc;
let smlc;
let subbox;
let supbox;
let smallbox;
function setup(){
  noCanvas();
sub = select("#sub");
sup = select("#sup");
sml = select("#sml");
subc = select("#subc");
supc = select("#supc");
smlc = select("#smlc");
subbox = select("#subbox");
supbox = select("#supbox");
smallbox = select("#smallbox");
  fontclr = select("#fontclr");
  fntclrbox = select("#fntclrbox");
  fontclrdiv = select("#fontclrdiv");
  fntclrinpt = select("#fntclrinpt");
  fontsize = select("#fontsize");
  fntsizbox = select("#fntsizbox");
  fontsizediv = select("#fontsizediv");
  fntsizinpt = select("#fntsizinpt");
  hrefbox = select("#hrefbox");
  hrefdiv = select("#hrefdiv");
  downdiv = select("#downdiv");
  downloadbox = select("#downloadbox");
  downloaddiv = select("#downloaddiv");
  downloadinpt = select("#downloadinpt");
  iddiv = select("#iddiv");
  idbox = select("#idbox");
  idid = select("#idid");
  stylediv = select("#stylediv");
  stylebox = select("#stylebox");
  stylestyle = select("#stylestyle");
  classdiv = select("#classdiv");
  classbox = select("#classbox");
  classclass = select("#classclass");
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
  radio.option('heading 4','h4');
  radio.option('heading 5','h5');
  radio.option('heading 6','h6');
  radio.option('font','font');
  p = select("#p");
  atag = select("#a");
  h1 = select("#h1");
  h2 = select("#h2");
  tt = select("#tt");
  ttc = select("#ttc");
  
  iframe = select("#iframet");
        framef = select("#frame");
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
  if(radio.value() === 'font'){
    fontsize.show();
    if(fntsizbox.checked()){
      fontsizediv.show();
    }else{
      fontsizediv.hide();
    }
  }else{
    fontsize.hide();
    fontsizediv.hide();
  }
  if(radio.value() === 'font' && fntsizbox.checked()){
    tt.html('&lt;font size=&quot;'+fntsizinpt.value()+'&quot;');
  }else{
    tt.html('&lt;'+radio.value());
  }
  if(radio.value() === 'font'){
    fontsize.show();
    fontclr.show();
    if(fntsizbox.checked()){
      fontsizediv.show();
    }else{
      fontsizediv.hide();
    }
    if(fntclrbox.checked()){
      fontclrdiv.show();
    }else{
      fontclrdiv.hide();
    }
  }else{
    fontsize.hide();
    fontsizediv.hide();
    fontclr.hide();
    fontclrdiv.hide();
  }
  if(radio.value() === 'font' && fntsizbox.checked()){
    tt.html('&lt;font size=&quot;'+fntsizinpt.value()+'&quot;');
  }else{
    tt.html('&lt;'+radio.value());
  }
  if(radio.value() === 'font' && fntclrbox.checked()){
    tt.html(tt.html()+' color=&quot;'+fntclrinpt.value()+'&quot;');
  }else{
    
  }
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
  if(subbox.checked()){
    sub.show();
    subc.show();
  }else{
    sub.hide();
    subc.hide();
  }
  if(supbox.checked()){
    sup.show();
    supc.show();
  }else{
    sup.hide();
    supc.hide();
  }
  if(smallbox.checked()){
    sml.show();
    smlc.show();
  }else{
    sml.hide();
    smlc.hide();
  }
  if(radio.value() === 'a'){
    hrefdiv.show();
  }else{
    hrefdiv.hide();
  }
  if(radio.value() === 'a' && hrefbox.checked()){
    href.show();
    downdiv.show();
    tt.html('&lt;'+radio.value()+' href=&quot;'+hyper.value()+'&quot;');
    ttc.html('&lt;/'+radio.value()+'&gt;');
  }else{
    href.hide();
    downdiv.hide();
    if(radio.value() === 'a')
    tt.html('&lt;'+radio.value());
    ttc.html('&lt;/'+radio.value()+'&gt;');
  }
  if(radio.value() === 'a' && downloadbox.checked() & hrefbox.checked()){
    downloaddiv.show();
    tt.html('&lt;'+radio.value()+' href=&quot;'+hyper.value()+'&quot; download=&quot;'+downloadinpt.value()+'&quot;');
    ttc.html('&lt;/'+radio.value()+'&gt;');
  }else if(!hrefbox.checked()){
    downloaddiv.hide();
    if(radio.value() === 'a')
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
  if(stylebox.checked()){
    stylediv.show();
    tt.html(tt.html()+' style=&quot;'+stylestyle.value()+'&quot');
  }else{
    stylediv.hide();
  }
  if(classbox.checked()){
    classdiv.show();
    tt.html(tt.html()+' class=&quot;'+classclass.value()+'&quot');
  }else{
    classdiv.hide();
  }
  tt.html(tt.html()+'&gt;');
  ttc.html('&lt;/'+radio.value()+'&gt;');
  if(radio.value() !== 'a'||!downloadbox.checked())
    downloaddiv.hide();
  
  iframe.html(tt.html());
				if (strong.checked()){
					iframe.html(iframe.html()+st.html());
				}
				if (subbox.checked()){
					iframe.html(iframe.ahtml()+sub.html());
				}
				if (supbox.checked()){
					iframe.html(iframe.html()+sup.html());
				}
				if (smallbox.checked()){
					iframe.html(iframe.html()+small.html());
				}
				if (mark.checked()){
					iframe.html(iframe.html()+mk.html());
				}
				if (i.checked()){
					iframe.html(iframe.html()+it.html());
				}
				if (underline.checked()){
					iframe.html(iframe.html()+ul.html());
				}
				iframe.html(iframe.html()+tc.html());
				if (strong.checked()){
					iframe.html(iframe.html()+stc.html());
				}
				if (subbox.checked()){
					iframe.html(iframe.html()+subc.html());
				}
				if (supbox.checked()){
					iframe.html(iframe.html()+supc.html());
				}
				if (smallbox.checked()){
					iframe.html(iframe.html()+smallc.html());
				}
				if (mark.checked()){
					iframe.html(iframe.html()+mkc.html());
				}
				if (i.checked()){
					iframe.html(iframe.html()+itc.html());
				}
				if (underline.checked()){
					iframe.html(iframe.html()+ulc.html());
				}
	iframe.html(iframe.html()+ttc.html());
        framef.html(iframe.html());
			}

