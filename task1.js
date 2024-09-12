const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
          const cek = dataDay.find((item) => item === day)
          if (cek) {
            resolve(cek)
          } else {
            reject('Hari ini bukan hari kerja')
          }
        }, 3000)
      })
    }


cekHariKerja('senin')
  .then(result => {
    console.log('Hari ' + result + ' adalah hari kerja')
})
  .catch(error => {console.error(error)
})
//then : Fungsi callback yang akan dijalankan jika promise berhasil dan menampilkan hasil dari "result".
//catch : Fungsi callback yang akan dijalankan jika promise ditolak atau terjadi error.

const cekHari = async (day) => {
    try {
        const result = await cekHariKerja(day)
        console.log('Hari ' + result + ' adalah hari kerja')
    } catch (error) {
        console.error(error)
    }
}
  
cekHari('senin')
//try : mencoba kode yang memungkinkan terjadi error, jika tidak error akan menampilkan hasil dari "result".
//catch : menangkap dan menangani kode error yang telah dicoba di "try".