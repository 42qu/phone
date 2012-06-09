(function() {
  var Router;

  window.HomeView = Backbone.View.extend({
    template: function() {
      return $('#HOME').html();
    },
    render: function(event) {
      $(this.el).html(this.template());
      return this;
    }
  });

  window.TaskView = Backbone.View.extend({
    template: function() {
      return $('#TASK').html();
    },
    render: function(event) {
      $(this.el).html(this.template());
      return this;
    }
  });

  Router = Backbone.Router.extend({
    routes: {
      "": "home",
      task: "task"
    },
    initialize: function() {
      return this.firstPage = true;
    },
    home: function() {
      return this.changePage(new HomeView());
    },
    changePage: function(page) {
      var transition;
      $(page.el).attr('data-role', 'page');
      page.render();
      console.info(page.el);
      $('body').append(page.el);
      transition = $.mobile.defaultPageTransition;
      if (this.firstPage) {
        transition = 'none';
        this.firstPage = false;
      }
      return $.mobile.changePage($(page.el), {
        changeHash: false,
        transition: transition
      });
    }
  });

  $(function() {
    var app;
    app = new Router();
    return Backbone.history.start();
  });

}).call(this);
