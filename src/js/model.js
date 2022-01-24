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
        image: recipe.image,
    };
}

export const loadRecipe = async function (id) {
    try {
        const data = await fetch(`${URL}complexSearch?apiKey=${KEY}`)
            .then(res => res.json())
            .then(data => console.log(data));

        state.recipe = createRecipe(data);
    } catch (err) {
        console.log(err)
        throw err;
    }
}

loadRecipe();

