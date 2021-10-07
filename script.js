const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo')


const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky', ),
   logo.classList.add('sticky__logo');

  else nav.classList.remove('sticky'), 
   logo.classList.remove('sticky__logo');

};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);