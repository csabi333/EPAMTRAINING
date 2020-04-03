class Footer{
    constructor(){
        this.template=`<footer id="footer"></footer>`;
        this.dateConfig = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
                };
    }
    
    init(){
        var footer = document.getElementById('footer');
        footer.innerHTML = `<div>${new Date().toLocaleString('hu-HU', this.dateConfig)}</div>
            <div>Szalontai Jordán</div>`;
        return Promise.resolve();
    }   
}

const footer = new Footer();

/*
var footer = (function() {

    var template = `<footer id="footer"></footer>`;

    var dateConfig = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    var init = function() {
        var footer = document.getElementById('footer');
        footer.innerHTML = `<div>${new Date().toLocaleString('hu-HU', dateConfig)}</div>
            <div>Szalontai Jordán</div>`;
        return Promise.resolve();
    }

    return {
        init: init,
        template: template
    };

})();*/