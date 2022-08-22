/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Амбрелла",
    "Скотт Пилигрим против...",
  ],
};

const ads = document.querySelectorAll(".promo__adv img");
const promoBg = document.querySelector(".promo__bg");
const promoTitle = promoBg.querySelector(".promo__genre");
const newElem = document.createElement("div");
const filmName = document.querySelectorAll(".promo__interactive-item");
const movieList = document.querySelector(".promo__interactive-list");

ads.forEach((item) => {
  item.remove();
});

promoTitle.textContent = "драма";

promoBg.style.cssText = "background-image: url(img/bg.jpg)";

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, index) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${index + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});
