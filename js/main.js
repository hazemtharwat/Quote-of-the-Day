let qoutes = [
  {
    'author': 'Oscar Wilde',
     'Qoute': 'Be yourself; everyone else is already taken.',
  },
  {
    "author": "Marilyn Monroe",
    "Qoute":
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  { 
    "author": "Frank Zappa", 
      "Qoute": "So many books, so little time."
  },
  { 
    "author": "William W. Purkey", 
       "Qoute": `“You've gotta dance like there's nobody watching,
      Love like you'll never be hurt,
      Sing like there's nobody listening,
      And live like it's heaven on earth.” `
  },
  { 
    "author": "Mae West", 
       "Qoute": `“You only live once, but if you do it right, once is enough.” `
  },
];
function getQuote(){
let randomNumber = Math.ceil(Math.random()* (qoutes.length)-1);
console.log(randomNumber);
console.log(qoutes[randomNumber].Qoute);
console.log(qoutes[randomNumber].author);
document.getElementById("quoteName").innerHTML=qoutes[randomNumber].Qoute;
document.getElementById("authorName").innerHTML=qoutes[randomNumber].author;
}

