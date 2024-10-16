class FileDownload{
    constructor(name, size){
        this.name = name;
        this.size = size;
        this.downloadTime();
        this.probabilityError();
    }

    downloadTime(){
        this.time = this.size * 10;
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