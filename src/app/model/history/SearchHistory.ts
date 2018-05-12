//History ts class
export class SearchHistory {
    public searchStr : string;
    public searchResults : number;

    constructor(searchStr, searchResults){
        this.searchStr = searchStr;
        this.searchResults = searchResults;
    }
}