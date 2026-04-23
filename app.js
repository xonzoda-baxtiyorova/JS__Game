// Kerakli html tag lariga ulanish
const first_player_img = document.querySelector(".first_player");
const second_player_img = document.querySelector(".second_player");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");

result.textContent = "You are first player. Click the button to start a game!";

// Takroriy kodlarni kamaytirish uchun funksiya
function getRandomNumber(num) {
  return Math.round(Math.random() * num);
}

// btn elementiga hodisa qo'shish
btn.addEventListener("click", () => {
  // tasodifiy sonlar generatsiya qilish
  const first_random_number = getRandomNumber(2);
  const second_random_number = getRandomNumber(2);

  if (first_random_number == 0) {
    first_player_img.setAttribute("src", "./img/🖐️.jpg");
  } else if (first_random_number == 1) {
    first_player_img.setAttribute("src", "./img/✊.jpg");
  } else {
    first_player_img.setAttribute("src", "./img/✌️.jpg");
  }

  if (second_random_number == 0) {
    second_player_img.setAttribute("src", "./img/🖐️.jpg");
  } else if (second_random_number == 1) {
    second_player_img.setAttribute("src", "./img/✊.jpg");
  } else {
    second_player_img.setAttribute("src", "./img/✌️.jpg");
  }

  //   birinchi o'yinchi yutadigan kombinatsiyalar
  if (first_random_number == 0 && second_random_number == 1) {
    result.textContent = "Siz yutdingiz!";
    result.style.color = "green";
  } else if (first_random_number == 1 && second_random_number == 2) {
    result.textContent = "Siz yutdingiz!";
    result.style.color = "green";
  } else if (first_random_number == 2 && second_random_number == 0) {
    result.textContent = "Siz yutdingiz!";
    result.style.color = "green";
  }
  //   Durang bo'ladigan kombinatsiyalar
  else if (first_random_number == second_random_number) {
    result.textContent = "Durang";
    result.style.color = "blue";
  }
  //   Ikkinchi o'yinchi yutadigan kombinatsiyalar
  else {
    result.textContent = "Siz yutqazdingiz!";
    result.style.color = "red";
  }
});