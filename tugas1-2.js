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

async function dayHanler(day){
    try{
        const dayHanler = await cekHariKerja(day)
        console.log(dayHanler)
    }catch(error){
        console.log(error)
    }
}

dayHanler('senin')

/** perbedaan nya adalah try catch, 
try catch perlu membuat async function, 
agar kode try catch dapat berjalan. serta membuat function
yang menapung await. await akan mengembalikan nilai dari Promise.
*/