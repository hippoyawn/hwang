document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const langButton = document.querySelector(".lang-button");
  
  const setLanguage = (lang) => {
      container.dataset.language = lang;
      localStorage.setItem(`language`, lang);
    
      langButton.textContent = lang === "ko" ? "EN" : "KO";
  };  
  
  langButton.addEventListener("click", () => {
    const now = container.dataset.language || "ko";
    const next = now === "ko" ? "en" : "ko";

    setLanguage(next);
  });

  setLanguage(localStorage.getItem("language") || "ko");
})