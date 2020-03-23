var ProductSearchParameters = function(params){
    this.searchTerm = '';
    this.userId = null;
    this.category = null;
    this.sortBy = 'name';
    this.sortDirection = 'asc';
    params && this.deserialize(params);
};
ProductSearchParameters.prototype.deserialize = function(params){
    if (params) {
        this.searchTerm = params.searchTerm || '';
        this.userId = params.userId && parseInt(params.userId) || null;
        params.sortBy && this.setSortBy(params.sortBy);
        params.sortDirection && this.setDirection(params.sortDirection);
    }
};
ProductSearchParameters.prototype.setSortBy = function(sort){
    var accept = ['name','date','price'];
    this.sortBy = accept[0];
    if (sort && accept.indexOf(sort.toLowerCase()) > -1) {
        this.sortBy = sort.toLowerCase();
    }
};
ProductSearchParameters.prototype.setDirection = function(direction){
    var accept = ['asc','desc'];
    this.sortDirection = accept[0];
    if (direction && accept.indexOf(direction.toLowerCase()) > -1) {
        this.sortDirection = direction.toLowerCase();
    }
};
ProductSearchParameters.prototype.toJSON = function(){
    this.setSortBy(this.sortBy);
    this.setDirection(this.sortDirection);
    return {
        searchTerm: this.searchTerm,
        userId: this.userId,
        sortBy: this.sortBy,
        sortDirection: this.sortDirection
    };
};