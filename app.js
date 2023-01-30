const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  //   console.log(e.target.dataset.id);   // FINDING BUTTONS -> BUTTONS HAVE A "data-id" ATTRIBUTE AND ACCESS IT'S VALUE (i.e. 'id') TO CHECK IF IT'S BUTTON OR NOT
  const id = e.target.dataset.id; // EVENT TARGET RETURNS WHATEVER YOU CLICKED ON
  if (id) {
    // REMOVE 'active' CLASS FROM ALL THE BUTTONS
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });

    // HIDE OTHER ARTICLES
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
