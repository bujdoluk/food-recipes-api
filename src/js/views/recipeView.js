import View from './View';

class RecipeView extends View {
    _parentEl = document.querySelector('.recipe');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';

    addRenderListener(listener) {
        ['hasChange', 'load'].forEach(event => window.addEventListener(event, listener));
    }



}

export default new RecipeView();