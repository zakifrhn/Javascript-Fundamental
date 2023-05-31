const seleksiNilai = (nAw, nAk, arr) => {
    if( nAw > nAk ){
        console.log('Nilai akhir harus lebih besar dari nilai awal')
        return;
    } if(arr.length  < 5){
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
        return;
    }

    let hasilSort = arr.filter((data) => data >= nAw && data <= nAk )
    let result = hasilSort.sort((a,b) => a - b) 
    if(result.length > 0){
        console.log(result)
    }else{
        console.log('Nilai tidak di temukan')
    }
    
}

(seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]))