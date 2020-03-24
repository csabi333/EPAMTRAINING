var indexPageController = (function(ProductService, ProductSearchParameters){

    //use this for filtering via ProductService
    var searchParameters = new ProductSearchParameters({
        sortBy: 'price',
        direction: 'asc'
    });
    //target item for product list
    var container = document.querySelector('.result .product-items');
    //category items list container
    var categories = document.querySelector('.filters ul');
    //search form
    var searchForm = document.querySelector('.index-page nav .search form');
    //search input
    var searchInput = document.querySelector('.index-page nav .search form input');
    //url of the categories array
    var categoryListUrl = '/api/products/categories';

    function updateFilters(){
        fetch(`${categoryListUrl}`)
            .then(function(response){
                return response.json();
            }).then(function(categoriesArray){
               for (let i=0;i<categoriesArray.length;i++){
                   generateFilter(categoriesArray[i])

               }
            });
    }

    function generateFilter (category){
        let li =document.createElement("li");
        let a =document.createElement("a");
        a.setAttribute("href","#");
        a.appendChild(document.createTextNode(category));
        a.addEventListener("click",filterProducts);//if i put category in the called function it already gets called without clicking
        li.appendChild(a);
        categories.appendChild(li);

        function filterProducts(){  //had to put it here because it was easier to use category in this scope
            searchParameters.category = category;
            searchProduct(searchParameters);
            searchParameters.category = null;// we set back the category to null to let the search work even after we filtered by category
            //but the search will parse all the products this way
        }
    }

    function initialize(){
        searchProduct(searchParameters);

        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            searchProduct(searchParameters);
        });

        searchInput.addEventListener('input', (event) => {
            searchParameters.searchTerm = event.target.value;
        });

        updateFilters();
    }

    function searchProduct(searchParameters) {
        //@todo: implement searching
        ProductService.search(searchParameters)
            .then(function(products) {
                container.innerHTML = '';
                products.forEach(function(product) {
                    container.appendChild(product.display());
                });
            });
    }

    return {
        run: initialize
    };
})(ProductService, ProductSearchParameters);