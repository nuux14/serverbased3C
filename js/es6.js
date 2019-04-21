var x=20;
if(x>10){
    var n = x+10;
}
console.log(n);
for(let i=0;i < 5; i++){
    //do something
    c = 50;
}
//console.log(i);
function abc(){
    var y = 60;
}
const PI = 3.14;

//->Arrow Functions
let display = function(){
    console.log('Hello World');
}

display = b =>console.log('Hello Arrows');
let d = (b,a)=>{
    b=b+a;
    return b;
}
d(52,20);// return b+a;
d= (b,a)=>b+a;
//Classes 
class User{
    constructor(fn,ln, ge,em){
      this.fname = fn;
      this.lname = ln;
      this.gender = ge;
      this.email = em;
    }
    userInfo(){
      console.log(`User's info: ${this.fname} ${this.lname}`)
    }
}
let u1 = new User('Gedi','Hadi','Male','g@g.cm');
console.log(u1.fname);