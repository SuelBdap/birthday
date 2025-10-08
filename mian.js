/**
 * Hàm chúc mừng sinh nhật trong Console
 */
function chucMungSinhNhat(ten) {
  console.log(`%c🎉 CHÚC MỪNG SINH NHẬT ${ten.toUpperCase()}! 🎉`, 
              'color: white; background-color: purple; padding: 10px; border-radius: 5px; font-size: 20px;');
  
  console.log("🎂 Chúc bạn một ngày thật tuyệt vời và mọi điều ước đều thành hiện thực!");
  
  // Hiệu ứng "pháo hoa" nhỏ
  const phaoHoa = ["✨", "🌟", "💫", "💖", "🎁"];
  let tinNhan = "";
  for(let i = 0; i < 20; i++) {
    tinNhan += phaoHoa[Math.floor(Math.random() * phaoHoa.length)] + " ";
  }
  console.log(tinNhan);
}

// Thay 'Một Người Đặc Biệt' bằng tên người bạn muốn chúc mừng
chucMungSinhNhat("Một Người Đặc Biệt");