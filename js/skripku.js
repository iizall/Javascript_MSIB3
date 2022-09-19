function dataSiswa(){
    let forms = document.getElementById('frm');
    let siswa = forms.nama.value;
    let profesi = forms.pekerjaan.value;
    let hb = forms.hobi.value;
    let data = `<h4> Data Siswa </h4>
    <br/>Nama : ${siswa}
    <br/>Pekerjaan : ${profesi}
    <br/>Hobby : ${hb}
    `;
    document.getElementById('isi').innerHTML = data;
    
}