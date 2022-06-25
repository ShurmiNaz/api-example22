const loadData = () => {
     fetch('https://api.kanye.rest')
          .then(res => res.json())
          .then(data => displayQuote(data))
}
const displayQuote = (quote) => {
     const container = document.getElementById('container');
     container.innerText = quote.quote;

}