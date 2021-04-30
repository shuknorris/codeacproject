const albert = ["We cannot solve our problems with the same thinking we used when we created them.","The true sign of intelligence is not knowledge but imagination.", "I have no special talent. I am only passionately curious.","The only reason for time is so that everything doesn't happen at once.", "It should be possible to explain the laws of physics to a barmaid.","It gives me great pleasure indeed to see the stubbornness of an incorrigible nonconformist warmly acclaimed.","The only real valuable thing is intuition."];
const aristotele = ["It is the mark of an educated man to look for precision in each class of thing in so far as its nature admits.","The life of money-making is one undertaken under compulsion since wealth is not the good we are seeking and is merely useful for the sake of something else.","If the virtues are neither passions nor facilities, all that remains is that they should be states of character.","Virtue is a state of character concerned with choice, being determined by rational principle as determined by the moderate man of practical wisdom.","Death is the most terrible of all things, for it is the end, and nothing is thought to be either good or bad for the dead","We punish a man for his ignorance if he is thought to be responsible for his ignorance.","Be yourself; everyone else is already taken."];

const randomizeQ = () => {
  const num = Math.floor(Math.random() * 7);
  const x = Math.floor(Math.random() * 7);
  if(num === 0){
    document.getElementById("root").innerHtml = '<h2>Your thought of the day: </h2><br>\n' + aristotele[x];
  } else if(num === 1) {
    document.getElementById('root').innerHTML='<h2>Your financial problem of the day : </h2><br>\n' + albert[x];
  } else if(num === 2) {
    document.getElementById('root').innerHTML ='<h2>Your crush love you if </h2><br>\n' + albert[x];
  } else if(num === 3) {
    document.getElementById('root').innerHTML='<h2>If you are bad, then I am your dad </h2><br>\n' + aristotele[x];
  } else {
    document.getElementById('root').innerHTML='<h2>I Recommend you to deeply intoroduce it </h2><br>\n' + aristotele[x];
  }
};
randomizeQ();
