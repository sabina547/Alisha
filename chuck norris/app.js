document.querySelector('.get-jokes').addEventListener('click',getjokes);
function getjokes(e){
    const number=document.querySelector('#number').value;
    console.log(number);
   
const xhr=new XMLHttpRequest();
xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true
);
xhr.onload=function(){
    if(this.status===200){
        const response=JSON.parse(this.responseText);
        console.log(response);
        let output='';
        if(response.type==='success'){                //method depends on how the API is formatted
            response.value.forEach(function(joke){
                output +=`<li>${joke.joke}</li>`;
            });                  //because its an array forEach is used
        }else{
             output +=`<li>Something is wrong</li>`
        }
    
    document.querySelector('.jokes').innerHTML=output;
} 
}
xhr.send();
e.preventDefault();
}