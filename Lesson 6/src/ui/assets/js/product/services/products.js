var ProductService = (function(ProductItem){
    var url = '/api/products';

    function searchProduct(searchParameters){
        //decide whether the user is searching using the form or e searching by using a filter    
        if (searchParameters.category){ 

            var categoryUrl=url+'/category/'+encodeURIComponent(searchParameters.category);

            return fetch(`${categoryUrl}`)
            .then(function(response){
                return response.json();
            }).then(function(products){
                return mapToProductItems(products);
            });
            
        }else{
            
            var params = buildUriParams(searchParameters);

            return fetch(`${url}${params}`)
            .then(function(response){
                return response.json();
            }).then(function(products){
                return mapToProductItems(products);
            });}

    }

    function mapToProductItems(products) {
        return products.map(function(product){
            return new ProductItem(product);
        });
    }

    function buildUriParams(searchParams) {
        var query = [];
        var params = searchParams.toJSON();
        //console.log(searchParams);    i tought i could extend the existing search with searching by category also
        //console.log("afterjson");     but here the tojson() i couldnt figure out why ignores the category in the object
        //console.log(params);          in the json category does not appear
        Object.keys(params).forEach(function(param){
            if (params[param]) {
                query.push(param+'='+encodeURIComponent(params[param]));
            }
        });
        console.log(query);
        return (query.length && '?' + query.join('&')) || '';
    }

    return {
        search: searchProduct
    };
})(ProductItem);