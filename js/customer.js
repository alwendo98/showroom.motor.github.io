function postToRest() {
    let idCustomerMotor = document.getElementById("idCustomerMotor").value;
    let namaCustomerMotor = document.getElementById("namaCustomerMotor").value;
    let kdSal = document.getElementById("kdSal").value;
    let idTransaksiMotor = document.getElementById("idTransaksiMotor").value;
    let tmptLhr = document.getElementById("tmptLhr").value;
    let tglLhr = document.getElementById("tglLhr").value;
    let jnsKelamin = document.getElementById("jnsKelamin").value;
    let pekerjaanCustomer = document.getElementById("pekerjaanCustomer").value;
    let alamatCustomer = document.getElementById("alamatCustomer").value;
        
        fetch('http://localhost:8456/api/customerMotor/addCustomerMotor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idCustomerMotor : idCustomerMotor,
                namaCustomerMotor: namaCustomerMotor,
                kdSal: kdSal,
                idTransaksiMotor: idTransaksiMotor,
                tmptLhr: tmptLhr,
                tglLhr: tglLhr,
                jnsKelamin: jnsKelamin,   
                pekerjaanCustomer: pekerjaanCustomer,   
                alamatCustomer: alamatCustomer           
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
          
    }

   
