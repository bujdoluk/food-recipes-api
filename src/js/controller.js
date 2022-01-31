import * as model from './model';
import searchView from './views/searchView';
import graphView from './views/graphView';
import recipeView from './views/recipeView';
import resultsView from './views/resultsView';

import 'core-js/stable';
import 'regenerator-runtime';
import { async } from 'regenerator-runtime';

const recipesController = async function () {
    try {
        const id = window.location.hash.slice(1);

        if (!id) return;
        recipeView.renderSpinner();

        await model.loadRecipe(id);

        recipeView.render(model.state.recipe);

    } catch (err) {
        recipeView.renderError();
        console.error(err);
    }
};

const searchResultsController = async function () {
    try {
        resultsView.renderSpinner();

        const query = searchView.getQuery();
        if (!query) return;

        await model.loadSearchResults(query);

    } catch (err) {
        console.log(err);
    }

};

const startApp = function () {
    searchView.addSearchListener(searchResultsController);
    recipeView.addRenderListener(recipesController);
}

startApp();