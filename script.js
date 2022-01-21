const nav = document.querySelector('.navigation');
const logo = document.querySelector('.navigation__logo')


const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;


const stickyNav = (entries) => {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky'),
   logo.classList.add('sticky__logo');

  else nav.classList.remove('sticky'), 
   logo.classList.remove('sticky__logo');

};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight+200}px`,
});

headerObserver.observe(header);