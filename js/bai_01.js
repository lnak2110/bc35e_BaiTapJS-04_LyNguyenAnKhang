/**
 * Đầu vào:
 *  + so1
 *  + so2
 *  + so3
 *
 * Xử lí:
 *  + Tìm số lớn nhất và so sánh 2 số còn lại
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnSapXep').onclick = function () {
  // Đầu vào:
  var so1 = document.getElementById('so1').value * 1;
  var so2 = document.getElementById('so2').value * 1;
  var so3 = document.getElementById('so3').value * 1;

  // Xử lí:
  var min;
  var middle;
  var max = so1;
  if (so2 > max) {
    max = so2;
  }
  if (so3 > max) {
    max = so3;
  }
  if (max === so1) {
    so2 < so3 ? (min = so2) && (middle = so3) : (min = so3) && (middle = so2);
  } else if (max === so2) {
    so1 < so3 ? (min = so1) && (middle = so3) : (min = so3) && (middle = so1);
  } else if (max === so3) {
    so1 < so2 ? (min = so1) && (middle = so2) : (min = so2) && (middle = so1);
  }

  // Đầu ra:
  document.getElementById(
    'ketQua1'
  ).innerHTML = `3 số theo thứ tự tăng dần: ${min}, ${middle}, ${max}`;
};
