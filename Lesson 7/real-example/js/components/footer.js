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

})();
