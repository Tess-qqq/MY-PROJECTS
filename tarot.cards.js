let cards = [];
fetch("Tarot_cards.json")
  .then(response => response.json())
  .then(data => {
      cards = data.Cards;
      // Shuffle, pick, and display image here
  });
function shuffle(param){
  for(let i = param.length -1; i>0; i--){
    const random = Math.floor(Math.random() * (i+1));
    [param[i], param[random]] = [param[random], param[i]]
  }
  return param
}
function getcard(shuffled){
  const random_card = Math.floor(Math.random()* shuffled.length);
  return shuffled[random_card]

}
function Divine(){
  const TarotCard = document.getElementById("TarotCard");
  const CardImage = document.getElementById("CardImage");
  const divination1 = document.getElementById("divination1");
  const divination2 = document.getElementById("divination2");
  const divination3 = document.getElementById("divination3");
  const divination4 = document.getElementById("divination4");
  const divination5 = document.getElementById("divination5");
  const divinationinfo = document.getElementById("divinationinfo");

  const shuffled = shuffle(cards);
  const card = getcard(shuffled);
  TarotCard.src = card.Card.Image;
  
  CardImage.style.display = "flex";
  divinationinfo.style.display = "block"; 
  divination1.style.backgroundImage = `url(${card.Card["Image"]})`;
  divination1.textContent = card.Card["No."];  
  divination2.style.color = card.Card["Card_Color"];
  divination2.style.backgroundImage = `url(${card.Card["Image"]})`;
  divination2.textContent = card.Card["Tarot Card"];
  divination3.style.backgroundImage = `url(${card.Card["Image"]})`;
  divination3.textContent = card.Card["Corresponding Pathway"];
  divination4.style.backgroundImage = `url(${card.Card["Image"]})`;
  divination4.textContent = card.Card["Corresponding Character"];
  divination5.style.backgroundImage = `url(${card.Card["Image"]})`;
  divination5.textContent = card.Card["Fate"];

  Shov = cardpicture(card)
}
