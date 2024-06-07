
const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {   
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let  cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}


//then catch
    cekHariKerja ('minggu')
    .then ((result) => { 
    console.log ('hari ' +result + ' adalah hari kerja' )
})

    .catch ((Error) => {
        console.log(Error)
    })
//

const checkDay = async (day) => {
    try {
        const result = await cekHariKerja(day);
        console.log('hari ' +result + ' adalah hari kerja' )
    } catch (Error){
        console.log(Error)
    }
}

checkDay('sabtu')
checkDay('selasa')