    function Quotes() {
    
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(function(response) {
        return response.json();
      })
    .then(function(data) {
        return data[0];
      })
    .then(function(profile){
        const quoteHtml = `<h1><strong>${profile.character}</strong></h1>
        <p><strong>${profile.quote}</strong></p>
        <img src=${profile.image}/>
        `;
        document.querySelector('#simpson').innerHTML= quoteHtml;
    }
    
)}

Quotes();
