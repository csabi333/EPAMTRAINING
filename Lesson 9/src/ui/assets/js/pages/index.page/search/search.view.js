export class SearchView {

    constructor(element, model) {
        this.element = element;
        this.model = model;
        this.onSubmitEventListener = null;

        this.initialize();
    }

    onFormSubmit = (event) => {
        const searchTerm = this.element.querySelector('input').value;
        this.onSubmitEventListener(searchTerm);
        event.preventDefault();
    };

    initialize() {
        this.element.innerHTML = `
            <form>
                <input type="text" name="searchterm" placeholder="Search a product...">
                <button type="submit" class="search-button">
                    <i class="fa fa-search"></i><span>Go</span>
                </button>
            </form>
        `;

        const formElement = this.element.querySelector('form');
        formElement.addEventListener('submit', this.onFormSubmit);
    }
}