import React, {useEffect, useState} from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import './App.scss';
import COLORS_ARRAY from "./colors.js";

//const element = <FontAwesomeIcon icon={faCoffee} />

let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quote, setQuote] = useState("Whatever the mind of man can conceive and believe, it can achieve.")
  const [author, setAuthor] = useState("Napoleon Hill")
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQuotesArray] = useState (null);
  const [accentColor, setAccentColor] = useState("#F44336");

  const fetchQuotes = async (url) => {
    const response =  await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }

  useEffect(() => {
    fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])

  const getRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random()) 
    setRandomNumber(randomInteger)
    setAccentColor(COLORS_ARRAY[randomInteger])
    setAuthor(quotesArray[randomInteger].author)
    setQuote(quotesArray[randomInteger].quote)
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColor, color:accentColor}}>
        <div id="quote-box" style={{color:accentColor}}>
          {/*<h1>Random Number: {randomNumber}</h1>*/}
        
          <p id="text">&quot;{quote}&quot;</p>
          <p id="author">-  {author}</p>
          <div className="buttons">
            <a id="tweet-quote" style={{backgroundColor:accentColor}} href={encodeURI(`https://www.twitter.com/intent/tweet?text=${quote} -${author}`)} target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
          
          <button id="new-quote"style={{backgroundColor:accentColor}} onClick={()=>getRandomQuote()}>Generate A Random Quote</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
