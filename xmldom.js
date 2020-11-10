let xmldom = require('xmldom');
let fs = require("fs");

let xmlString = fs.readFileSync('books.xml', 'utf8');
let parser = new xmldom.DOMParser();
let xmlDoc = parser.parseFromString(xmlString,"text/xml");
let books=Array.from(xmlDoc.documentElement.getElementsByTagName("book"));
for (let b of books) {
    let author = b.getElementsByTagName("author")[0].firstChild.nodeValue;
    let title = b.getElementsByTagName("title")[0].firstChild.nodeValue;
    console.log(author+" - "+title);
}

