const checkDisk = (diskTitle) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const availableDisk = ['GTA SA', 'Downhill', 'God Hand', 'PES 2013', 'Fifa 2013', 'Harvest Moon'];
        const isAvailable = availableDisk.find((title) => title === diskTitle);
        if (isAvailable) {
          resolve('Kaset '+ diskTitle + ' tersedia.');
        } else {
          reject('Kaset '+ diskTitle + ' tidak tersedia.');
        }
      }, 3000);
    });
  }
  

  checkDisk('God Hand')
    .then(message => {
        console.log(message)
    })
    .catch(error => {
        console.error(error)
    })