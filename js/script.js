/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
// var quoteArray = [{'quote':'The way to get started is to quit talking and begin doing.','source' : 'Walt Disney','citation' : '','year' : ''}, 
// {'quote':'To do great work is to love what you do. If you have not found it yet, keep looking. Do not settle','source' : 'Steve Jobs','citation' : 'Stanford','year' : '2005'},
// {'quote':'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.','source' : 'Simon Sinek','citation' : 'Leaders Eat Last','year' : '2014'},
// {'quote':'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.','source' : 'Patrick McKenzie','citation' : 'Twitter','year' : '2016'}]


var quoteArray = [];
quoteArray.push({'quote':'The way to get started is to quit talking and begin doing.','source' : 'Walt Disney'});
quoteArray.push({'quote':'To do great work is to love what you do. If you have not found it yet, keep looking. Do not settle','source' : 'Steve Jobs','citation' : 'Stanford','year' : '2005'});
quoteArray.push({'quote':'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.','source' : 'Simon Sinek','citation' : 'Leaders Eat Last','year' : '2014'});
quoteArray.push({'quote':'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.','source' : 'Patrick McKenzie','citation' : 'Twitter','year' : '2016'});

/***
 * `getRandomQuote` function
***/
var index = null;
var prevIndex = null;

function getRandomQuote(){
    // making sure no repeated randomized index
    while(index == prevIndex){
        index = Math.floor((Math.random()*(quoteArray.length))); 
    }
    prevIndex = index;
    // console for debugging purpose
    console.log(index);
    // returning a quote object
    return quoteArray[index];
}


/***
 * `printQuote` function
***/
function printQuote(){
    let quoteObject = getRandomQuote();
    let displayQuote = "<p class='quote'>" + quoteObject.quote +"</p>" + "<p class = 'source'>" + quoteObject.source;
    // check citation and year
    if(quoteObject.citation != null){
        displayQuote += "<span class='citation'>"+quoteObject.citation+ "</span>";
    }
    if(quoteObject.year != null){
        displayQuote += "<span class='year'>"+quoteObject.year+ "</span>";
    }
    displayQuote += "</p>";
    document.getElementById('quote-box').innerHTML = displayQuote;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/
document.getElementById('load-quote').addEventListener("click",printQuote);