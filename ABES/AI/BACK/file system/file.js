const fs= require('fs');
const data=fs.readFileSync("./data.txt","utf-8");
console.log(data);
const fs= require('fs');
//const data=fs.readFileSync("./data.txt","utf-8");
//console.log(data);
//fs.appendFileSync("./data1.txt","this is my new work 234","utf-8")
//fs.renameSync("./data3.txt","./data5.txt",)
//fs.unlinkSync("./data5.txt")

if(data.match("H")){
    console.log("H is found");
    const newdata= data.replace("H", "ABES");
    fs.writeFileSync("./data.txt", newdata, "utf-8"); 
}