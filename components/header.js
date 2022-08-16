// 導覽列header
let dropdown = document.querySelector('.custom-container');
let height = dropdown.offsetHeight;
dropdown.style.height = '0px';

let arrow = document.querySelector('.dropdown-toggle');

window.addEventListener("resize", () => {
  hideArrow();
});
function hideArrow() {
  let windowWidth = window.innerWidth;
  if (windowWidth < 992) {
    arrow.classList.add('remove-arrow')
  } else {
    arrow.classList.remove('remove-arrow')
  }
}
hideArrow();

document.querySelector('.dropdown').addEventListener('mouseover', () => {
  dropdown.style.height = `${height}px`;
})
dropdown.addEventListener('mouseover', () => {
  dropdown.style.height = `${height}px`;
})
document.querySelector('.dropdown').addEventListener('mouseleave', () => {
  dropdown.style.height = '0px';
})

let isActive = false;
document.querySelector('.navbar-toggler').onclick = () => {
  isActive = !isActive
  if (isActive) {
    document.querySelector('.hamburger-top').classList.add('toggle-top-active');
    document.querySelector('.hamburger-center').classList.add('toggle-center-active');
    document.querySelector('.hamburger-bottom').classList.add('toggle-bottom-active');
  } else {
    document.querySelector('.hamburger-top').classList.remove('toggle-top-active');
    document.querySelector('.hamburger-center').classList.remove('toggle-center-active');
    document.querySelector('.hamburger-bottom').classList.remove('toggle-bottom-active');
  }
}