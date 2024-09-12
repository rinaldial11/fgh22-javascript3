const cekBilangan = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number % 2 === 0) {
                resolve('Bilangan genap')
            } else {
                reject('Bilangan ganjil')
            }
        }, 3000)
    })
}

cekBilangan(6)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error(error)
    })