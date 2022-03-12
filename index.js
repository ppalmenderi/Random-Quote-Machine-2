function App() {
//https://type.fit/api/quotes
const [quotes, setQuotes] = React.useState([]);
const [randomQuote, setRandomQuote] = React.useState("");
const [color, setColor] = React.useState("#000");

React.useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();

        setQuotes(data);
        let randIndex = Math.floor(Math.random() * data.length);
        setRandomQuote(data[randIndex])
    }
    fetchData();
}, [])

    const getNewQuote = () => {
     
            const colors = [
                "#FFFFFF",
"#C0C0C0",
"#808080",
"#000000",
"#FF0000",
"#800000",
"#FFFF00",
"#808000",
"#00FF00",
"#008000",
"#00FFFF",
"#008080",
"#0000FF",
"#000080",
"#FF00FF",
"#800080"
           ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
        setRandomQuote(quotes[randIndex]) 
        setColor(colors[randColorIndex])     
    }
    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
        <div className="container pt-5">
            <div className="container-fluid bg-light p-5">
                <div className="card">
                    <div className="card-header">Random Quotes</div>
                    <div className="card-body">
                        {randomQuote ? (
                            <>
                            <div className="quote-text">&quot;{randomQuote.text}&quot;</div>
                            <div className="author-text">- {randomQuote.author || "No author"}</div>
                            
                            </>
                        ) : (
                            <h2>Loading</h2>
                        )}

                        <div className="buttons">
                            
                            
                            <a href={ "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(
                                '"' + randomQuote.text + '" ' + randomQuote.author
                                )
                        }
                                class="button" id="twitter" target="_blank" /*className="btn btn-warning"*/>
                                
                                <i className="fa fa-twitter"></i>
                            </a>
                            
                            <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags,freecodecamp&caption=" + encodeURIComponent(randomQuote.text) + encodeURIComponent(randomQuote.author) + "&canonicalUrl=https%3A%2F%2Fwww.tumbler.com%2Fbuttons&shareSource=tumblr_share"} class="button" id="tumblr" target="_blank" /*className="btn btn-danger"*/>
                                <i className="fa fa-tumblr"></i>
                                
                            </a>
                            <button onClick={getNewQuote} id="newQuote" className="btn btn-primary ml-3">New Quote</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        
    );
}

ReactDOM.render(<App/>, document.getElementById('app'))