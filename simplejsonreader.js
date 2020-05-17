var fs=require('fs');
var info=fs.readFileSync('info.json');
var coll=JSON.parse(info);
for (let obj in coll) {
    console.log(coll[obj].name);
    console.log(coll[obj].age)
    console.log("*********");
}