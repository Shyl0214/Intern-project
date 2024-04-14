const previousPageButton = document.querySelector("#btn");

previousPageButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

const nextPageButton = document.querySelector("#btn-2");

nextPageButton.addEventListener("click", () => {
  window.location.href = "page3.html";
});
