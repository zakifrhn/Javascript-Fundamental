/*
Deteksi Palindrom
Diberikan sebuah teks periksa apakah kata tersebut adalah palindrom atau bukan
Example :
Input : cekPalindrom(‘malam’) 
Output : Palindrom

 */

const cekPalindrom = (str) =>{
    let len = str.length;

    //menyalin sebagian array, dari index awal dan index akhir
    //mathfloor berfungsi membulatkan ke bawah
    let leftSide = str.slice(0, Math.floor(len/2));

    //mathceil berfungsi membulatkan ke atas
    let rightSide = str.slice(Math.ceil(len/2), len).split('').reverse().join('');

    if (leftSide == rightSide) {
        console.log('Palindrom')
    }else{
        console.log('Bukan Palindrom');
    }
}

cekPalindrom('malam')