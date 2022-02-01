import View from './View';

class PreView extends View {
    _parentEl = '';

    _generateMarkup() {
        const id = window.location.hash.slice(1);

        return `
        <li class="preview">
            <a class="preview_link ${this._data.id === id ? 'preview__link--active' : ''
            }" href="#${this._data.id}">
                <div class="preview_link_unit">
                    <figure class="preview_unit_img"></figure>
                    <div class="preview_unit_info">
                        <div class="preview_unit_info_name">${this._data.title}</div>
                        <div class="preview_unit_info_description">
                            <div class="description">description</div>
                            <div class="calories">calories</div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
      `;
    }
}

export default new PreView();