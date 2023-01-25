function postToRest() {
    let idTransaksiMotor = document.getElementById("idTransaksiMotor").value;
    let codeSal = document.getElementById("codeSal").value;
    let kdKendaraan = document.getElementById("kdKendaraan").value;
    let idCustomerMotor = document.getElementById("idCustomerMotor").value;
    let nameCustomerMotor = document.getElementById("nameCustomerMotor").value;
    let noFakturMotor = document.getElementById("noFakturMotor").value;
    let tglTransaksi = document.getElementById("tglTransaksi").value;
    let merkKendaraan = document.getElementById("merkKendaraan").value;
    let hargaJual = document.getElementById("hargaJual").value;
        
        fetch('http://localhost:8456/api/transaksiMotor/addTransaksiMotor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idTransaksiMotor : idTransaksiMotor,
                codeSal: codeSal,
                kdKendaraan: kdKendaraan,
                idCustomerMotor: idCustomerMotor,
                nameCustomerMotor: nameCustomerMotor,
                noFakturMotor: noFakturMotor,
                tglTransaksi: tglTransaksi,   
                merkKendaraan: merkKendaraan,   
                hargaJual: hargaJual           
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
          
    }

   
