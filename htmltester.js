function test() {
const myString = document.getElementsByTagName("TEXTAREA")[0].value;
const encoded = btoa(myString);
//console.log(encoded);                 OCY5JjomOyY8Jj4mPyY=
document.getElementsByTagName("IFRAME")[0].setAttribute("src", `data:text/html;base64,${encoded}`);
}