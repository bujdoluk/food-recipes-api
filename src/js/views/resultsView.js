import View from './View';
import preView from './preView';

class ResultsView extends View {
    _parentEL = document.querySelector('.results');
    _errorMessage = 'No recipes found for your query! Try again, please.';
    _message = '';

    _generateMarkup() {
        return this._data.map(results => preView.render(results)).join('');
    }
}

export default new ResultsView();