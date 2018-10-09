generic.Main = function() {
    this.init();
};

generic.Main.prototype.init = function() {
    new generic.Sidebar();

    this.loadData();
};

generic.Main.prototype.loadData = function() {
    //TODO - load data from server in here

    this.render();
    this.bind();
};

generic.Main.prototype.render = function() {
    //TODO - Render new data in current view
};

generic.Main.prototype.bind = function() {
    //TODO - Attach all listeners here
};