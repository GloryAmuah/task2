const quotes = require('./quotes');

const addNewQuotes = (quote, author) => {
  const newQuote = { quote, author };
  const newQuotes = quotes.concat(newQuote);
  return newQuotes;
};

module.exports = addNewQuotes;
