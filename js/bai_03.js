/**
 * Đầu vào:
 *  + soThu1
 *  + soThu2
 *  + soThu3
 *
 * Xử lí:
 *  + Nếu số chia hết cho 2 => số chẵn => tăng số lượng số chẵn thêm 1
 *  + Nếu số không chia hết cho 2 => số lẻ => tăng số lượng số lẻ thêm 1
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnChanLe').onclick = function () {
  // Đầu vào:
  var soThu1 = document.getElementById('soThu1').value * 1;
  var soThu2 = document.getElementById('soThu2').value * 1;
  var soThu3 = document.getElementById('soThu3').value * 1;

  // Xử lí:
  var soChan = 0;
  var soLe = 0;
  soThu1 % 2 === 0 ? soChan++ : soLe++;
  soThu2 % 2 === 0 ? soChan++ : soLe++;
  soThu3 % 2 === 0 ? soChan++ : soLe++;

  // Đầu ra:
  document.getElementById(
    'ketQua3'
  ).innerHTML = `Có ${soChan} số chẵn và ${soLe} số lẻ`;
};
