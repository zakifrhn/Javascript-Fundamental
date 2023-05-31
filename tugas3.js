/*
Buatlah program menggunakan method fetch untuk menampilkan semua name (hanya name nya saja) dari REST API dibawah ini
https://jsonplaceholder.typicode.com/users
Gunakan debugger console bawaan browser Chrome untuk melihat hasilnya

 */

const getName = () =>{
    const ObjetcArray = fetch('https://jsonplaceholder.typicode.com/users')

    //json() mengambil nilai array menjadi jason
    ObjetcArray.then((response) => response.json())

    //setelah itu data tersebut di display secara looping menggunakan foreach
    .then((data) =>{
        data.forEach(element => {
            //memilih outuput yang di pilih berdasarkan key, yaitu "name"
            console.log(`${element.name}`);
            });
    }).catch((error) => console.log(error))
}

getName();

