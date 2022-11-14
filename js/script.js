const projectCount = document.getElementById('projects').dataset.projects;

let slideIndex = [];
for (let i = 0; i < projectCount; i++) { slideIndex.push(0); }
for (let i = 0; i < projectCount; i++) { showSlides(i + 1); }

function showSlides(projectNum) {
  
  let slides = [...document.getElementsByClassName('portfolio-card__slide')]
    .filter(slide => slide.dataset.projectNum === projectNum.toString());
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex[projectNum - 1]++;
  if (slideIndex[projectNum - 1] > slides.length) {slideIndex[projectNum - 1] = 1}
  slides[slideIndex[projectNum - 1]-1].style.display = "block";
  const randomInterval = randomInteger(3000, 5000);
  setTimeout(() => showSlides(projectNum), randomInterval);
  
}

// helpers
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}