generic.Sidebar = function(config) {
    this.init(config);
};

generic.Sidebar.prototype.init = function(config) {
    this.loadData(config);
};

generic.Sidebar.prototype.loadData = function(config) {
    //TODO - load data from server in here

    this.render(config);
    this.bind(config);
};

generic.Sidebar.prototype.render = function(config) {
    //TODO - Render new data in current view

    $('#sidebar-container').load('templates/side-bar.html', function() {
        var parsedHTMLFile = $('#sidebar-container').html();
        var configObject = {
            
        };
        var html = Mustache.to_html(parsedHTMLFile, configObject);
        $('#sidebar-container').html(html);
    });
};

generic.Sidebar.prototype.bind = function(config) {
    //TODOWeekday - Attach all listeners here

    $('#sidebar-container').on('click', '#editMyProfileButton', this.editMyProfile);
};

generic.Sidebar.prototype.editMyProfile = function () {
    $('#myProfileInfo').css('display', 'none');
    $('#myProfileEditForm').css('display', 'block');
    $('#editMyProfileButton').text('Save Changes');
};




