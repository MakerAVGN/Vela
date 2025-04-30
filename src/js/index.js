import "../styles/header-grid.scss";

document.addEventListener("DOMContentLoaded", () => {
  const languageRu = document.getElementById("RU");
  const languageEn = document.getElementById("EN");

  const setActiveLanguage = (activeBtn, inactiveBtn) => {
    activeBtn.classList.add("checked");
    inactiveBtn.classList.remove("checked");

    const lang = activeBtn.id.toLowerCase();
    document.documentElement.lang = lang;

    localStorage.setItem("selectedLanguage", lang);
  };

  languageRu.addEventListener("click", () =>
    setActiveLanguage(languageRu, languageEn)
  );
  languageEn.addEventListener("click", () =>
    setActiveLanguage(languageEn, languageRu)
  );

  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    const activeBtn = savedLanguage === "ru" ? languageRu : languageEn;
    const inactiveBtn = savedLanguage === "ru" ? languageEn : languageRu;
    setActiveLanguage(activeBtn, inactiveBtn);
  }

  // Каталог
  const catalogButton = document.querySelector(".header-main__catalog-button");
  const dropDownMenu = document.querySelector(".catalog-dropdown");

  catalogButton.addEventListener("click", function () {
    dropDownMenu.classList.toggle("active");
  });

  // Подарочные наборы
  const giftButton = document.querySelector(".gift-sets");
  const giftdropDownMenu = document.querySelector(".gifts-dropdown");

  giftButton.addEventListener("click", function () {
    giftdropDownMenu.classList.toggle("active");
  });
});
