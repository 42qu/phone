(function() {
  var Router;

  window.HomeView = Backbone.View.extend({
    template: function() {
      return $('#HOME').html();
    },
    render: function(event) {
      $(this.el).html(this.template());
      return this;
    },
    events: {
      "click .TASK": function() {
        return app.navigate("TASK", true);
      }
    }
  });

  window.TaskView = Backbone.View.extend({
    template: function() {
      return $('#TASK').html();
    },
    render: function(event) {
      $(this.el).html(this.template());
      return this;
    },
    events: {
      "click .HOME": function() {
        return app.navigate("", true);
      }
    }
  });

  Router = Backbone.Router.extend({
    routes: {
      "": "HOME",
      TASK: "TASK"
    },
    initialize: function() {
      return this.firstPage = true;
    },
    HOME: function() {
      return this.changePage(new HomeView());
    },
    TASK: function() {
      return this.changePage(new TaskView());
    },
    changePage: function(page) {
      var transition;
      $(page.el).attr('data-role', 'page');
      page.render();
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
    window.app = new Router();
    return Backbone.history.start();
  });

}).call(this);
