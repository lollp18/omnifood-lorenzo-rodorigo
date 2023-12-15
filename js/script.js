const yearsEL = document.querySelector(".year");
const btnNavEL = document.querySelector(".btn-mobile-nav");
const allLinks = document.querySelectorAll("a:link");
const sectionHeroEL = document.querySelector(".section-hero");
const headerEL = document.querySelector(".header");

// set currentYear
const date = new Date();

yearsEL.innerHTML = date.getFullYear();

// Mobile navigaton

btnNavEL.addEventListener("click", () => {
  headerEL.classList.toggle("nav-open");
});

allLinks.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const heref = element.getAttribute("href");

    // scoll to top
    if (heref === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // scroll to sections

    if (heref !== "#" && heref.startsWith("#")) {
      const sectionEL = document.querySelector(heref);
      sectionEL.scrollIntoView({
        behavior: "smooth",
      });
    }

    // close mobile nav

    if (element.classList.contains("main-nav-link")) {
      headerEL.classList.toggle("nav-open");
    }
  });
});

// stiky navigation

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
};

const obscallback = function (entrys) {
  const entry = entrys[0];

  if (!entry.isIntersecting) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
  }
};

const obs = new IntersectionObserver(obscallback, obsOptions);
obs.observe(sectionHeroEL);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
console.log("Fixing flexbox gap property missing in Safari versions");
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
