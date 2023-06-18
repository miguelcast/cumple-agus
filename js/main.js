var $cards = document.querySelector(".card");
var $style = document.querySelector(".hover");

$cards.addEventListener("mousemove", (e) => {
  var $card = document.querySelector('.pika');
  var l = e.offsetX;
  var t = e.offsetY;
  var h = $card.offsetWidth;
  var w = $card.offsetHeight;
  var lp = Math.abs(Math.floor(100 / w * l)-100);
  var tp = Math.abs(Math.floor(100 / h * t)-100);
  var lp2 = (50 - (Math.abs(Math.floor(100 / w * l)-100))/10)+5;
  var tp2 = (50 - (Math.abs(Math.floor(100 / h * t)-100))/10)+5;
  var ty = (tp - 50)/2;
  var tx = ((lp - 50) * .5) * -1;
  var bg = `background-position: ${lp}% ${tp}%;`
  var bg2 = `background-position: ${lp2}% ${tp2}%;`
  var tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg)`
  var style = `
    .card.active:before { ${bg} }
    .card.active:after { ${bg2} }
    .card.active { ${tf} }
  `
  $cards.classList.add("active");
  $card.classList.add("active");

  var styleSheet = document.createElement("style")
  styleSheet.innerText = style
  document.head.appendChild(styleSheet)
});

$cards.addEventListener("mouseout", (e) => {
  $cards.classList.remove("active");
})

var $pokeball = document.querySelector('.center-on-page');

$pokeball.addEventListener('click', () => {
  const $cardsWrapper = document.querySelector('.cards');
  const $name = document.querySelector('.tac');
  const $map = document.querySelector('.map');
  const $when = document.querySelector('.when');
  const $team = document.querySelector('.team');
  $cardsWrapper.classList.remove('hide')
  $name.classList.remove('hide')
  $map.classList.remove('hide')
  $when.classList.remove('hide')
  $team.classList.remove('hide')
  $pokeball.classList.add('hide')
})
