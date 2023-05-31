/*
Deni membeli makanan menggunakan aplikasi FazzFood. Dimana terdapat 2 buah kode promo :
Promo ‘FAZZFOOD50’ dengan ketentuan pemesanan minimal 50rb akan mendapatkan diskon 50%, 
dengan maksimal potongan sebesar 50rb.
Promo ‘DITRAKTIR60’ dengan ketentuan pemesanan minimal 25rb akan mendapatkan diskon 60% 
dengan maksimal potongan sebesar 30rb.
Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap 1km 
selanjutnya dikenakan penambahan 3rb. Untuk beberapa restoran dikenakan pajak 
yakni 5% dari harga makanan yang dipesan (true), jika tidak dikenakan 
pajak (false).

Buatlah sebuah function yang menerima 4 parameter
FazzFood(harga, voucher, jarak, pajak)

contoh:
input:
FazzFood(75000,'FAZZFOOD50',5,true)
ouput:
Harga: 75000
potongan: 37500
biaya antar: 14000
pajak: 3750
subtotal: 55250



*/


const FazzFood = (harga,voucher,jarak,pajak) => {
    if(voucher == "FAZZFOOD50" && harga >= 50000){
        console.log('Kode voucher harus sama!')
        voucher = harga * 50 / 100 
        hargaVoucher = harga - voucher 
        
    } else if( voucher == "DITRAKTIR60" && harga >= 25000){
        voucher = harga * 25 / 100
        hargaVoucher = harga - voucher 
    }

    jarak = 5000 + ((jarak - 2 ) * 3000 )

    if(pajak == true){
        pajak = harga * 5 / 100
    }

    let totalBiaya = harga - hargaVoucher + jarak + pajak; 

    console.log(`
    Harga: ${harga}
    potongan: ${hargaVoucher}
    biaya antar: ${jarak}
    pajak: ${pajak}
    total: ${totalBiaya}`)

}
   
FazzFood(75000,'DITRAKTIR60',5,true)
