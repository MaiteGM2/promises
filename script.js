class FileDownload{
    constructor(name, size){
        this.name = name;
        this.size = size;
        this.downloadTime();
    }

    downloadTime(){
        this.time = this.size * 10;
    }
}