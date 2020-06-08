const div1 = dom.create("<div><span>hi</span></div>");
const div2 = dom.create("<div>new space</div>");
dom.after(test, div2);

dom.before(test, div1);
dom.append(test, div2);

const div3 = dom.create("<div id='parent'></div>");
dom.wrap(test, div3);

dom.remove(div1);
const div4 = document.getElementById("class");

dom.attr(test, "class", "red");

dom.text(test, "hi,I am coming");
const div = dom.find("#test.red")[0];
console.log(div);
