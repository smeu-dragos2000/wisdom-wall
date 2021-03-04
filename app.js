
const quoteText = document.getElementById('quote-text');
const newQuoteBtn = document.getElementById('new-quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');

const getQuote = () => {
    fetch('quotes.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const jsonLength = data.length;
        const randomNumber = Math.floor(Math.random() * jsonLength);
        const randomQuoteIndex = data[randomNumber];
        const randomQuote = randomQuoteIndex.quoteText;
        const randomAuthor = randomQuoteIndex.quoteAuthor;

        // If Author is blank, add 'Unknown'
        if(randomAuthor === '') {
            authorText.innerText = 'Unknown';
        }
        else {
            authorText.innerText = randomAuthor;
        }

        // Reduce font size for long quotes
        if(randomQuote.length < 50) {
            quoteText.classList.add('long-quote')
        }
        else {
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText = `"${randomQuote}"`;
    });
}

const tweetQuote = () => {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
    console.log(quote, author);
}

//  Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);





