const prev=document.getElementById('container');
const btn=document.getElementById("btn");
const h2=document.createElement('h2');
const h3=document.createElement('h3');
async function api(){
    let url="https://official-joke-api.appspot.com/random_joke";
    let result=await fetch(`${url}`);
    let data=await result.json();
    console.log(data);
    jokes(data);
 
}
api();
function newjoke(){
    h2.innerHTML='';
    h3.innerHTML='';
    api();
}
btn.addEventListener("click",newjoke)


function jokes(data){
   
    prev.appendChild(h2);
    
    prev.appendChild(h3);
    h2.innerHTML=`${data.setup}`;
    h3.innerHTML=`${data.punchline}`;
    
}
