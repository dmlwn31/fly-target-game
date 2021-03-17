//초기화 변수
let count = 0;
let playing = false;
let timer;

//DOM 변수
const $start = document.querySelector('#start');
const $score = document.querySelector('#score');
const $target = document.querySelector('#flyImg');

//let abc = Math.floor(Math.random() * 500);
//console.log(abc);

function moveTarget() {
  let x = Math.floor(Math.random() * 600);
  let y = Math.floor(Math.random() * 500);

  $target.style.left = x + 'px';
  $target.style.top = y + 'px';
}

function gameStart() {
  if (playing == false) {
    playing = true;
    endGame();
    timer = setInterval(function () {
      moveTarget();
    }, 1000);
  }
}

function endGame() {
  setTimeout(function () {
    playing = false;
    clearInterval(timer);
    alert("훌륭해요 당신은 대단한 파리 헌터에요!");
  }, 15000);
}

$start.addEventListener('click', function () {
  gameStart();
});

$target.addEventListener('click', function () {
  if (playing == true) {
    count++;
    $score.textContent = count;
  }
});


//jquery 파리 클릭시 터짐 
$(function () {
  $('#flyImg').click(function () {
    $('#target2').show();
    $('#target1').hide();
  });


  $('#flyImg').click(function () {
    $('#target2').show(); // 나타나게.
    setTimeout(function () {
      $('#target2').hide();  // 사라지게
      $('#target1').show();
    }, 300);
  })
});

$(function () {
  $('#item02').click(function () {
    $('.panel').css('cursor', 'url(./target/img/itemcursor02.png');
    consolelog()
  });
});