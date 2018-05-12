//Movie ts class
export class Movie {
    public id : number;
    public title : string;
    public release_date : string;
    public overview : string;
    public vote_average : string;
    public vote_count : string;
    public poster_path : string;
    public backdrop_path : string;

    constructor(id, title, release_date, overview, vote_average, vote_count, poster_path, backdrop_path){
        this.id = id;
        this.title = title;
        this.release_date = release_date;
        this.overview = overview;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
    }
}