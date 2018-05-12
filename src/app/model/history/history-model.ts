//own import
import {SearchHistory} from "./SearchHistory";

//interface
export interface HistoryModel {
    historyList: SearchHistory [];
    addHistoryEntry : (searchHistory : any ) => void;
    resetHistoryList : () => void;

}

//model implementation
export class DefaultHistoryModel implements HistoryModel {
    public historyList: SearchHistory[];
    private $model = $(this);


    public addHistoryEntry(searchHistory : SearchHistory) {
        this.historyList.push(searchHistory);
        this.notifyModelChange();
    }

    private notifyModelChange() {
        this.$model.trigger('modelchange');
    }

    public resetHistoryList() {
        this.historyList = [];
        this.notifyModelChange();
    }
}