function postToRest() {
    let kdSal = document.getElementById("kdSal").value;
    let nameSal = document.getElementById("nameSal").value;
    let jnskel = document.getElementById("jnskel").value;
    let ageSal = document.getElementById("ageSal").value;
    let addresSal = document.getElementById("addresSal").value;
    let idtransaksimotor = document.getElementById("idtransaksimotor").value;
    
   
        
        fetch('http://localhost:8296/api/transaksiMotor/addTransaksiMotor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                kdSal : kdSal,
                nameSal: nameSal,
                jnskel: jnskel,
                ageSal: ageSal,
                addresSal: addresSal,
                addresSal: addresSal,
                idtransaksimotor: idtransaksimotor                
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
          
    }

   
