function hitung(operator){
    var frm = document.getElementById('calForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);
    // var tbltambah = frm.btn_tambah.value;
    // var tblkurang = frm.btn_kurang.value;
    var tombol = operator;
    var kosong = 'Harap Masukkan Angka';

    switch (tombol){
        case 'tambah' :
            if (isNaN(a1) || isNaN(a2)){
                alert(kosong);
            }else {
                var total = a1 + a2;
                frm.hasil.value = total;
            }
        break;
        case 'kurang' :
            if (isNaN(a1) || isNaN(a2)){
                alert(kosong);
            }else {
                var total = a1 - a2;
                frm.hasil.value = total;
            }
        break;
        case 'kali' :
            if (isNaN(a1) || isNaN(a2)){
                alert(kosong);
            }else {
                var total = a1 * a2;
                frm.hasil.value = total;
            }
        break;
        case 'bagi' :
            if (isNaN(a1) || isNaN(a2)){
                alert(kosong);
            }else {
                var total = a1 /  a2;
                frm.hasil.value = total;
            }
        break;
        case 'pangkat' :
            if (isNaN(a1) || isNaN(a2)){
                alert(kosong);
            }else {
                var total = Math.pow(a1, a2);
                frm.hasil.value = total;
            }
        break;
        default:;
    }
}