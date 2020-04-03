(function() {

    document.getElementById('root').innerHTML = `
        ${header.template}
        ${main.template}
        ${footer.template}
    `;

    Promise.all([
        header.init(),
        main.init(),
        footer.init()
    ]);

})();
