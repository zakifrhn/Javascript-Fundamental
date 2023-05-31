/**
Buatlah sambungan program menggunakan : 
a. then catch 
b. try catch 
untuk mengecek hari kerja dari kode Asynchronous disamping dan jelaskan penggunaan then catch dan try catch dengan memberikan komentar di bawahnya

 */

const cekHariKerja = (day) =>{
    return new Promise((resolved,rejected) =>{
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item == day
            })
            if(cek){
                resolved(`hari ${day} adalah hari kerja`);
                
            }else{
                rejected (new Error(`Hari ${day} bukan hari kerja`));
            }
        }, 3000)
    })
}


cekHariKerja('senin')
.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.error(error)
});

//perbedaan nya adalah then catch, 
//tidak perlu membuat async function 
//dan baris code lebih efisien (jika bukan callback hell)
// serta tidak perlu membuat variabel untuk menampung nilai await