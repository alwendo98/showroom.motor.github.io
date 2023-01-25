let tableCont = document.querySelector('#table-cont');

fetch('http://localhost:8296/api/transaksiMotor/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>Id Transaksi Motor</th><th>Kode Sales</th>><th>Kode Kendaraan</th>><th>Id CustomerMotor</th>><th>Nama Customer Motor</th>><th>No Faktur</th>><th>Tgl Transaksi</th></tr>';

        data.forEach((element) => {
            thead += '<tr><td>' + element.idTransaksi + '</td><td>' + element.kdsal + '</td> <td>' + element.kdKenda + '</td><td>' + element.idCustomermotor + '</td><td>' + element.nmCustomer + '</td><td>' + element.noFaktur + '</td><td>' + element.tglTransaksi + '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });