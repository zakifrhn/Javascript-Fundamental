function triangle(number) {
    let hasil = '';
    if (number < 0) {
      console.log("Parameter harus bertipe number dan bernilai positif!");
    } if (number % 1) {
      console.log("Parameter harus bertipe number dan bernilai positif!");
    } if (typeof (number) != 'number') {
      console.log("Parameter harus bertipe number dan bernilai positif!");
    } else {
      for (let i = 1; i <= number; i++) {
        let num = 0;
        for (let j = number; j >= i; j--) {  
            num++;
            hasil += num;
        }
        hasil += '\n';
    }
    return hasil;
    }
  }
  console.log(triangle(6));