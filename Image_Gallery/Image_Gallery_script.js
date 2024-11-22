const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

const images = document.querySelectorAll(".gallery-item");

images.forEach((image) => {
    image.addEventListener("click", function () {
        modal.style.display = "flex"; 
        modalImg.src = this.src; 
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; 
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none"; 
    }
});