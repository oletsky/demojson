"using strict";
let fs=require('fs');
let info=fs.readFileSync('manyobjects.json');
let coll=JSON.parse(info);
for (let obj in coll) {
    console.log(coll[obj].name);
    console.log(coll[obj].age)
    console.log("***********That's al********************");
}
