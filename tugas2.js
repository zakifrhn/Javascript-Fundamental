const mtk = null;
const bhsIndo = null;
const bhsEng = null;
const ipa = null;

if(isNaN(mtk)){
    console.log('Nilai Mata pelajaran MTK harus di input')
}
else if(isNaN(bhsIndo)){
    console.log('Nilai Mata pelajaran Bahasa Indonesia harus di input')
}
else if(isNaN(bhsEng)){
    console.log('Nilai Mata pelajaran Bahasa Inggris harus di input')
}
else if(isNaN(ipa)){
    console.log('Nilai Mata pelajaran IPA harus di input')
}

else{
    const meanPel = (mtk+bhsEng+bhsIndo+ipa) / 4
    if(meanPel >= 90){
        console.log(`Rata-rata UN: ${meanPel} \n Grade = A`)
    }else if(meanPel >= 80){
        console.log(`Rata-rata UN: ${meanPel} \n Grade = B`)
    }else if(meanPel >= 70){
        console.log(`Rata-rata UN: ${meanPel} \n Grade = C`)
    }else if(meanPel >= 60){
        console.log(`Rata-rata UN: ${meanPel} \n Grade = D`)
    }else if(meanPel >= 0) { 
        console.log(`Rata-rata UN: ${meanPel} \n Grade = E`)
    }
}
