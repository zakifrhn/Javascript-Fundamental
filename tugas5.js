/*
Reverse Words
Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik
Example :
Input : reverseWords(‘Saya Belajar Javascript’)
Output : Javascript Belajar Saya
 */

const reverseWords = (str) => str.split(' ').reverse().join(' ')


console.log(reverseWords('Saya Belajar CSS'))