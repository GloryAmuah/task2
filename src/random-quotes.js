// Create a nodejs library and expose an api which returns a random quote every time it's called. 
// Another api should take a quote from the user via and save it to an array.
const quotes = require('./quotes')

const getRandomQuotes = () => {
    const randomQuote = quotes[Math.floor((Math.random() * quotes.length))]
    return `"${randomQuote.quote}" -- ${randomQuote.author}`
}

module.exports = getRandomQuotes

