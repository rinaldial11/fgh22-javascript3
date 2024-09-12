const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April',  
                    'Mei', 'Juni', 'Juli', 'Agustus', 'September', 
                    'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null, month)         
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

const showMonth = (error, months) => {
    if (error) {
        console.error(error.message)
    } else {
        months.map(month => console.log(month))
    }
}

getMonth(showMonth)