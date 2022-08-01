let s = new Date().toLocaleString();
console.log(s);
let s1 = Date().toString('yyyy-MM-d-h-mm-ss');
console.log(s1)
let s2 = Date();
// let date = s2.getDate();
console.log(date);
console.log(s2);



var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
let utcMilliseconds = today.getUTCMilliseconds();
console.log(date + ' '+ time+ " "+utcMilliseconds);
console.log("0515"+today.getFullYear()+""+(today.getMonth()+1)+""+today.getDate()+""+today.getHours()+""+today.getMinutes()+""+today.getSeconds()+""+today.getUTCMilliseconds()+""+today.getUTCMilliseconds())