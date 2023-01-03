class Manga {
    id;
    image;
    mangaName;
    chapter_number;
    statusManga;
    idUser;



    constructor(id, image, mangaName, chapter_number, statusManga,idUser) {
        this.id = id;
        this.image = image;
        this.mangaName = mangaName;
        this.chapter_number = chapter_number;
        this.statusManga = statusManga;
        this.idUser = idUser;
    }
    getId() { return this.id; }
    setId(id){this.id = id}
    getImg() {
        return this.img ;
    }
    setImg(image) {
        this.img = image;
    }
    getmangaName() {
        return this.mangaName;
    }
    setmangaName(mangaName) {
        this.mangaName = mangaName;
    }
    getchapter_number() {
        return this.chapter_number;
    }
    setchapter_number(chapter_number) {
        this.chapter_number = chapter_number;
    }
    getstatusManga() {
        return this.statusManga;
    }
    setstatusManga(statusManga) {
        this.statusManga = statusManga;
    }
}