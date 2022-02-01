class SearchView {
    _parentEl = document.querySelector('.search_container');

    getQuery() {
        const query = this._parentEl.querySelector('.search_container_field').value;
        this.clearInput();
        return query;
    }

    clearInput() {
        this._parentEl.querySelector('.search_container_field').value = '';
    }

    addSearchListener(listener) {
        this._parentEl.addEventListener('submit', function (e) {
            e.preventDefault();
            listener();
        })
    }
}
export default new SearchView();