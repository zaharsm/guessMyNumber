'use strict';

function random() {
  return Math.trunc(Math.random() * 20) + 1;
}

let random_no;

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  random_no = random();
});

let diff_c;
document.querySelector('.check').addEventListener('click', function () {
  let type_no = document.querySelector('.guess').value;

  if (random_no === undefined) {
    random_no = random();
  }

  console.log(random_no);
  console.log(Number(type_no));

  if (!type_no) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (Number(type_no) !== random_no) {
    document.querySelector('.message').textContent =
      Number(type_no) > random_no ? 'Too high' : 'Too Low';

    diff_c = document.querySelector('.score').textContent;

    diff_c = diff_c - 1;

    document.querySelector('.score').textContent = diff_c;
  } else if (Number(type_no) === random_no) {
    document.querySelector('.number').textContent = random_no;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Correct Number!';
    document.body.style.backgroundColor = 'green';

    let hg_sc = Number(document.querySelector('.highscore').textContent);

    console.log(hg_sc);
    console.log(diff_c);

    if (diff_c === undefined) {
      let unique_c = document.querySelector('.score').textContent;
      document.querySelector('.highscore').textContent = unique_c;
    } else if (hg_sc >= diff_c) {
      document.querySelector('.highscore').textContent = hg_sc;
    } else {
      document.querySelector('.highscore').textContent = diff_c;
    }
  }
});
