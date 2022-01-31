class SearchView {
    _searchElement = document.querySelector('.search_container');

    getQuery() {
        const query = this._searchElement.querySelector('.search_container_field').value;
        this.clearInput();
        return query;
    }

    clearInput() {
        this._searchElement.querySelector('.search_container_field').value = '';
    }

    addSearchListener(listener) {
        this._searchElement.addEventListener('submit', function (e) {
            e.preventDefault();
            listener();
        })
    }
}
export default new SearchView();