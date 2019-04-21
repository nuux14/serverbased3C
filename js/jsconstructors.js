import {User, abc} from './user.js'

var btn=document.getElementById('btnAdd');
btn.addEventListener('click',addUser);
function addUser(){
    var name = document.getElementById("txtName");
    var email = document.querySelector('#txtEmail');
    var tbl = document.querySelector("#tbl");
  //create new row
    var tr= document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    td1.innerText = name.value;
    td2.innerText = email.value;

    tr.appendChild(td1);
    tr.appendChild(td2);

    tbl.appendChild(tr);
   var nuser = new User(name.value,email.value);
   usersCollection.push(nuser);
    name.value='';
    email.value='';
}
var usersCollection=[];

// function User(name,email){
//     this.fname=name;
//     this.userEmail=email;
// }


// var u = new User("Hinda", "hinda@g.com");
// var u2 = new User("Gedi","gedi@g.com");

//JSON- Javascript Object Notation
//      exchange data bn sites.
