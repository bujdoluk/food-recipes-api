import { async } from "regenerator-runtime";
import { RES_PER_PAGE, URL, KEY } from "./config";
import { AJAX } from './helpers';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE
    },
    bookmarks: []
}

const createRecipe = function (data) {
    const { recipe } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        cuisine: recipe.cuisine,
        diet: recipe.diet,
        intolerances: recipe.intolerances,
        type: recipe.type,
        author: recipe.author,
        maxCarbs: recipe.maxCarbs,
        maxProtein: recipe.maxProtein,
        maxFat: recipe.maxFat,
        maxFiber: recipe.maxFiber,
        maxSugar: recipe.maxSugar,
        maxCalories: recipe.maxCalories,
    };
};

export const loadRecipe = async function (id) {
    try {
        const data = await AJAX(`${URL}${id}?key=${KEY}`);
        state.recipe = createRecipe(data);

        console.log(state.recipe);

    } catch (err) {
        console.error(`${err}`);
        throw err;
    }
};

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;

        const data = await AJAX(`${URL}complexSearch?query=${query}&apiKey=${KEY}`);
        console.log(data);

        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                maxCalories: rec.maxCalories,
                cuisine: rec.cuisine
            };
        });
        state.search.page = 1;

    } catch (err) {
        console.error(`${err}`);
        throw err;
    }
};

