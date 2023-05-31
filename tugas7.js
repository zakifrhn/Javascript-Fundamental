/*
Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol)
dalam variabel tersebut 
merupakan pemisah antara satu bilangan dengan bilangan lainnya. 
Bilangan-bilangan tersebut akan dipisahkan dan diurutkan 
berdasarkan angka di bilangan-bilangan itu sendiri. 
Setelah itu, bilangan hasil pengurutan akan digabungkan kembali dengan
 tanpa pemisah dengan output berupa bilangan integer

Buatlah sebuah function yang menerima parameter hanya deret 
Angka dan menghasilkan output seperti keterangan diatas

contoh:
input:
divideAndSort(5956560159466056)
output:
55566914566956

*/

const divideAndSort = (num) =>{

    // memisaahkan bilangan
    const angka = num.toString().split('0')

    //mengurutkan setiap angka
    const sortAngka = angka.map(numItem => (numItem.toString().split('').sort().join('')));

    //
    const joinAngka =  sortAngka.join('');
    return joinAngka
}

const angka = 5956560159466056

const hasil = divideAndSort(angka);

console.log(hasil);