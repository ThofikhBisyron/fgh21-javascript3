//program 1
const mariDagang = (dagang, diskon) => {
    return new Promise ((resolve, reject) =>
    setTimeout(() => {
        const paket = {
            'ayam dada' : 20000, 
            'ayam sayap' : 15000,
            'ayam paha' : 10000,};
        if (paket [dagang]) {
            const asli = paket[dagang];
            const hargaDiskon = asli - (asli * diskon / 100);
            resolve ('harga asli '+ dagang + ' adalah ' + asli +' setelah diskon harga menjadi ' +hargaDiskon);
        }else{
            reject (new Error('tidak tersedia'));
        }
    }, 2000)
)
}


mariDagang('ayam paha', 10)
.then ((result) => {
    console.log(result)
})

.catch((error) => {
    console.log(error) 
})

//program 2
const motorSaya = (merk) => {
    return new Promise ((resolve, reject) => {   
        setTimeout(() => {
            const datamerk = ['suprax', 'genio', 'vario', 'supraelek', 'jazz']
            let  kendaraan = datamerk.find((item) => {
                return item === merk
            })
            if(kendaraan){
                resolve(kendaraan)
            }else{
                reject(new Error('saya tidak punya merk tersebut'))
            }
        }, 4000)
    })
}


//then catch
    motorSaya ('jazz')
    .then ((result) => { 
    console.log ('Salah satu motor saya adalah ' +result)
})

    .catch ((Error) => {
        console.log(Error)
    })