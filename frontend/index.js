function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('section>div');
  widgets.forEach((widget, idx) => {
    widget.classList.add('class', 'widget')
    widget.setAttribute('tabindex', idx + 1 + "")
  });


  

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomidx = Math.floor(Math.random() * quotes.length);
  //console.log(randomidx);
  const randomquote = quotes[randomidx];  
  //console.log(randomquote);
  const quote = document.createElement('div');
  const quotetext = randomquote.quote;
  quote.textContent = quotetext;
  const widget1 = document.querySelector('.quoteoftheday');
  //console.log(quote);
  widget1.appendChild(quote);


  // Author
  const authors = quotes[randomidx];
  const author = document.createElement('div');
  const authorName = authors.author;
  author.textContent = authorName;
  console.log(author)

  const dates = quotes[randomidx];
  const date = document.createElement('div');
  const Adate = dates.date;
  date.textContent = Adate;

  


  author.textContent = `${authorName} in ${Adate || " an unknown date"}`
  const widget2 = document.querySelector(".quoteoftheday");
  widget2.appendChild(author);





  




  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const corp = document.querySelector(".corporatespeak");

  const random2 = Math.floor(Math.random() * 10);
  const random3 = Math.floor(Math.random() * 10);

  const verb = verbs[randomidx];
  const noun = nouns[randomidx];
  const adverb = adverbs[randomidx];
  
  
  const verb2 = verbs[random2];
  const noun2 = nouns[random2];
  const adverb2 = adverbs[random2];

  const corpText = `We need to ${verb} our ${noun} ${adverb} in order to ${verb2} our ${noun2} ${adverb2}.`;
  console.log(corpText);

  const corpSpeak = document.createElement('div');
  corpSpeak.textContent = corpText;
  corp.appendChild(corpSpeak);
  
  



  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const counter = document.querySelector('.countdown');
  let count = 5;
  const counting = document.createElement('p');
  counting.textContent = `T-minus ${count}...`
  counter.appendChild(counting);

  setInterval(() => {
    if (count === 1){
      counting.textContent = "Liftoff! 🚀"
    } else {
      count--;
      counting.textContent = `T-minus ${count}...`

    }

  }, 1000);




  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const person = people[Math.floor(Math.random() * people.length)];
  const personParagraph = document.createElement('p');
  document.querySelector('.friends').appendChild(personParagraph);
  const year = person.dateOfBirth.split('-')[0];
  let sentence = `${person.fname} ${person.lname} was born in ${year} and`

  if (!person.friends.length) {
    sentence += ' has no friends.'
  } else {
    sentence += ' is friends with '
    for (let idx = 0; idx < person.friends.length; idx++) {
      const friendId = person.friends[idx]
      const friend = people.find(p => p.id === friendId)
      const fullName = `${friend.fname} ${friend.lname}`;
      console.log(fullName);
      let isLastIdx = idx === person.friends.length - 1;
      let isNextToLastIdx = idx === person.friends.length - 2;
      if (isLastIdx){
        sentence += `${fullName}.`
      } else if (isNextToLastIdx) {
        sentence += `${fullName} and `
      } else {
        sentence += `${fullName}, `
      }
    }
  }

  personParagraph.textContent = sentence

  console.log(person)


  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
