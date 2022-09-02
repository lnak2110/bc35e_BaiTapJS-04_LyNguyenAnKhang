/**
 * Đầu vào:
 *  + canh1
 *  + canh2
 *  + canh3
 *
 * Xử lí:
 *  + Nếu 3 cạnh bằng nhau => tam giác đều
 *  + Nếu 2 trong 3 cạnh bằng nhau => tam giác cân
 *  + Nếu 1 cạnh bằng căn bậc 2 của tổng bình phương 2 cạnh còn lại => tam giác vuông
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnCheckTamGiac').onclick = function () {
  // Đầu vào:
  var canh1 = document.getElementById('canh1').value * 1;
  var canh2 = document.getElementById('canh2').value * 1;
  var canh3 = document.getElementById('canh3').value * 1;

  // Xử lí:
  var tamGiac = 'khác';
  if (canh1 === canh2 && canh1 === canh3) {
    tamGiac = 'đều';
  } else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
    tamGiac = 'cân';
  } else if (
    canh1 === Math.sqrt(canh2 * canh2 + canh3 * canh3) ||
    canh2 === Math.sqrt(canh1 * canh1 + canh3 * canh3) ||
    canh3 === Math.sqrt(canh1 * canh1 + canh2 * canh2)
  ) {
    tamGiac = 'vuông';
  }

  // Đầu ra:
  document.getElementById('ketQua4').innerHTML = `Đây là tam giác ${tamGiac}`;
};
