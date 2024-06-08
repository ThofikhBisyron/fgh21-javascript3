
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) 
    .then(users => {
        
        const names = users.map(user => user.name);
        //const emails = users.map(user => user.email)
        console.log(names); 
        //console.log(emails)
    })
    .catch(error => {
        console.error('Tidak bisa menampilkan karena sesuatu', error);
    });
    
