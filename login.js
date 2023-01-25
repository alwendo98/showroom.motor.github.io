function login() {
    let inemail = document.getElementById('username').value;
    let inpw = document.getElementById('pass').value;
    fetch('http://localhost:8296/api/TableSales/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: inemail,
            password: inpw
        }),
    })
        .then((response) => response.json())
        .then((data) =>console.log(data));
      
}