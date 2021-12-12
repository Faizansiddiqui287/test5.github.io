let meme= fetch('https://meme-api.herokuapp.com/gimme')
let f = meme.then(function(result){
    return result.json();
})
let img =f.then(function(data){
    console.log(data.url);
});
