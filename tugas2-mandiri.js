const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Iman', 'Olivia', 'Penelope'
  ];

const searchName = (names,cariNama,batas,callback) =>{
    const result = []
    let numAwal = 0

    for( i = 0; i < names.length; i++){
        const name = names[i]
        if(name.toLowerCase().includes(cariNama.toLowerCase())){
            result.push(name);
            numAwal ++;
        }
        if(numAwal === batas){
            break;
        }
    }
    callback(result)
}

const maxOut = (result) => {
    if(result.length > 0 ){
        for(let i = 0; i < result.length; i++){
            console.log(result[i])
        }
    }else{
        console.log('Hasil tidak ditemaukan / ada')
    }

}

(searchName(names, "ca", 2 , maxOut));