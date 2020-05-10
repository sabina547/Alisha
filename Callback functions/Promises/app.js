const posts = [
    {title: 'Past One', body: 'This is post one'},
    {title: 'Past Two', body: 'This is post two'}
];

function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            posts.push(post);

            const error = true;
            if(!error) {
                resolve();
            } else {
                reject('Error:Something went wrong');

            }

        }, 2000);
        resolve();


    });


    
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li`;
        });
        document.body.innerHTML = output;

    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts)
.then(getPosts)
.catch(function(err) {
    console.log(err);
});



