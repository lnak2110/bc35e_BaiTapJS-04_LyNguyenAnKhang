/**
 * Đầu vào:
 *  + thanhVienGD
 *
 * Xử lí:
 *  + Đưa ra lời chào phù hợp dựa vào lựa chọn
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnChao').onclick = function () {
  // Đầu vào:
  var thanhVienGD = document.getElementById('thanhVienGD').value;

  // Xử lí:
  if (thanhVienGD === 'b') {
    var thanhVien = 'Bố';
  } else if (thanhVienGD === 'm') {
    var thanhVien = 'Mẹ';
  } else if (thanhVienGD === 'a') {
    var thanhVien = 'Anh trai';
  } else if (thanhVienGD === 'e') {
    var thanhVien = 'Em gái';
  }

  // Đầu ra:
  document.getElementById('ketQua2').innerHTML = `Xin chào ${thanhVien}!`;
};
