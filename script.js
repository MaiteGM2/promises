class FileDownload{
    constructor(name, size){
        this.name = name;
        this.size = size;
        this.downloadTime();
        this.probabilityError();
    }

    downloadTime(){
        this.time = this.size * 0.1;
    }

    probabilityError(){
        this.error = Math.random() > 0.3;
        console.log(this.name,this.error);
    }

    download(){
        return new Promise((resolve, reject) => {
            console.log(`Starting download of ${this.name} file`);
            setTimeout(() => {
                if(this.error){
                    resolve(`Successful download of ${this.name} file`);
                } else{
                    reject(`${this.name} file download failed`);
                }
        
            }, this.time);
        });
    }
}

const file1 = new FileDownload(`VS Code`, 500);
const file2 = new FileDownload(`Solid Edge`, 6500);
const file3 = new FileDownload(`Spotify`, 1440);
const file4 = new FileDownload(`EA APP`, 664);

Promise.all([file1.download(), file2.download(), file3.download(), file4.download()])
    .then((values) => {
        console.log(`Success on all downloads:`, values);
    })
    .catch((error) => {
        console.error(`There was a problem downloading at least one file:`, error);
    });

Promise.allSettled([file1.download(), file2.download(), file3.download(), file4.download()])
    .then((values) => {
        console.log(`All settled:`, values);
    })
    .catch((error) => {
        console.error(`All settled:`, error);
    });