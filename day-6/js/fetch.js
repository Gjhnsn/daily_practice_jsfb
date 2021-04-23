fetch('https://28448f85f99b.ngrok.io/')
    .then(function (data) {
        console.log(data)
        return data.json(); //parse data
    }).then(function (data) {
        console.log(data)
    });

fetch('https://28448f85f99b.ngrok.io/'), {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify({
        user: 'Hello'
    })
}
then(function (data) {
    console.log(data)
    return data.json(); //parse data
}).then(function (data) {
    console.log(data)
});