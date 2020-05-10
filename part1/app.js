document.getElementById('button').addEventListener('click',loadData);

function loadData() {
    //Create an XHR object
    const xhr = new XMLHttpRequest();  //xmlHttp is same as xhr

    //OPEN
    xhr.open('GET', 'data.txt', true);

    console.log('READYSTATE', xhr.readyState);

    //optional - Used for spinners/loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.readyState}</h1>;`
            
        }
    }

    // xhr.onreadystatechange = function() {
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function() {
        console.log('Request error...');
    }

    xhr.send();


// here HTTP Statuses
//200: "OK"
//403: "Forbidden"
//404: "Not Found"

//ReadyState Values
// 0 : request not initialized
// 1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready

}