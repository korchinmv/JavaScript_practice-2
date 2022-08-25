"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
  const movieList = document.querySelector(".promo__interactive-list");
  const addForm = document.querySelector(".add");
  const formInput = addForm.querySelector(".adding__input");
  const checkbox = document.querySelector("[type='checkbox']");

  const deleteAbv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };
  deleteAbv(ads);

  const makeChanges = () => (promoTitle.textContent = "драма");
  promoBg.style.cssText = "background-image: url(img/bg.jpg)";
  makeChanges();

  const sortFilmsList = (arr) => {
    arr.sort();
  };

  const createNewFilmsList = (films, parent) => {
    parent.innerHTML = "";
    sortFilmsList(movieDB.movies);

    films.forEach((film, index) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${index + 1} ${film}
          <div class="delete"></div>
      </li>
      `;
    });

    document.querySelectorAll(".delete").forEach((btn, index) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        films.splice(index, 1);
        createNewFilmsList(films, parent);
      });
    });
  };
  createNewFilmsList(movieDB.movies, movieList);

  addForm.addEventListener("submit", (e) => {
    let newFilm = formInput.value;
    const favorite = checkbox.checked;

    e.preventDefault();
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`;
      }

      movieDB.movies.push(newFilm);
      sortFilmsList(movieDB.movies);
      createNewFilmsList(movieDB.movies, movieList);
    } else {
      formInput.style.cssText = "border-color: red";
    }

    if (favorite) {
      console.log("Добавляем любимый фильм");
    }

    e.target.reset();
  });
});
