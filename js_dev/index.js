(function() {
  var Router;

  window.HomeView = Backbone.View.extend({
    tagName: "li",
    template: _.template($('#HOME').html()),
    events: {
      "click .check": "toggleDone",
      "dblclick div.todo-content": "edit",
      "click span.todo-destroy": "clear",
      "keypress .todo-input": "updateOnEnter",
      render: function(event) {
        $(this.el).html(this.template());
        return this;
      }
    }
  });

  window.TaskView = Backbone.View.extend({
    tagName: "li",
    template: _.template($('#TASK').html()),
    events: {
      "click .check": "toggleDone",
      "dblclick div.todo-content": "edit",
      "click span.todo-destroy": "clear",
      "keypress .todo-input": "updateOnEnter",
      render: function(event) {
        $(this.el).html(this.template());
        return this;
      }
    }
  });

  Router = Backbone.Router.extend({
    route: {
      "": "home",
      task: "task"
    },
    initialize: function() {
      return {};
    },
    home: function() {
      alert(1);
      return this.changePage(new HomeView());
    }
  });

  $(function() {
    var app;
    alert(1);
    return app = new Router();
  });

}).call(this);
