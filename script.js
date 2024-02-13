document.getElementById("name").addEventListener("click", function() {
  for (let i = 0; i < 50; i++) { // สร้างหัวใจสุ่ม 30 อัน
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px"; // ตำแหน่งสุ่มในแนวนอน
  heart.style.top = Math.random() * window.innerHeight + "px"; // ตำแหน่งสุ่มในแนวตั้ง
  heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // ความยาวของการเคลื่อนไหวสุ่ม
  heart.style.opacity = Math.random(); // ความโปร่งใสสุ่ม
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000); // เอฟเฟคที่หัวใจหายไปหลังจาก 5 วินาที
}
