(function() {
  var Router;

  Backbone.View.prototype.goto = function(uri) {
    return app.navigate(uri, true);
  };

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
        return this.goto("TASK");
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
        return this.goto("HOME");
      }
    }
  });

  Router = Backbone.Router.extend({
    routes: {
      HOME: "HOME",
      TASK: "TASK"
    },
    initialize: function() {
      return this.HOME();
    },
    HOME: function() {
      return this.goto(new HomeView());
    },
    TASK: function() {
      return this.goto(new TaskView());
    },
    goto: function(page) {
      var transition;
      $(page.el).attr('data-role', 'page');
      page.render();
      $('body').append(page.el);
      transition = 'none';
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
