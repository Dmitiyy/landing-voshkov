function initAOS() {
  const screenWidth = window.innerWidth;

  AOS.init({
    disable: screenWidth < 1050,
  });
}

initAOS();
window.addEventListener('resize', initAOS);

const pjtTabs = document.querySelectorAll('.pjt-btns-tab');
const pjtBlocks = document.querySelectorAll('.pjt-description__block');

const removeAllActive = () => {
  pjtTabs.forEach(item => item.classList.remove("pjt-btns-active"));
  pjtBlocks.forEach(item => item.classList.remove("pjt-block-active"));
}

pjtTabs.forEach(item => {
  item.addEventListener('click', () => {
    removeAllActive();
    item.classList.add("pjt-btns-active");
    const blockNum = item.classList[0].slice(-1);
    document.querySelector(`.pjt-description__block-${blockNum}`).classList.add("pjt-block-active");
  });
});

const burger = document.querySelector(".burger-menu");
const modal = document.querySelector(".burger-menu-wrap");

burger.addEventListener('click', () => {
  modal.classList.toggle("burger-menu-active");
});

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.classList[0] === "burger-menu-item") {
    modal.classList.remove("burger-menu-active");
  }
});