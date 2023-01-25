let tableCont = document.querySelector('#table-cont');

fetch('http://localhost:8456/api/transaksiMotor/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>Id Transaksi Motor</th><th>Kode Sales</th>><th>Kode Kendaraan</th>><th>Id Customer Motor</th>><th>Nama Customer Motor</th>><th>No Faktur Motor</th>><th>Tgl Transaksi</th><th>Merk Kendaraan</th><th>Harga Jual</th></tr>';

        data.forEach((element) => {
            thead += '<tr><td>' + element.idTransaksiMotor + '</td><td>' + element.codeSal + '</td> <td>' + element.kdKendaraan + '</td><td>' + element.idCustomerMotor + '</td><td>' + element.nameCustomerMotor + '</td><td>' + element.noFakturMotor + '</td><td>' + element.tglTransaksi + '</td><td>' + element.merkKendaraan + '</td><td>' + element.hargaJual + '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });