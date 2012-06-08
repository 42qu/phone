window.HomeView = Backbone.View.extend

  tagName:  "li"

  template: _.template($('#HOME').html())

  events:

    "click .check"              : "toggleDone",

    "dblclick div.todo-content" : "edit",

    "click span.todo-destroy"   : "clear",

    "keypress .todo-input"      : "updateOnEnter"


    render: (event) -> 

        $(@el).html @template()

        return @

 

window.TaskView = Backbone.View.extend

  tagName:  "li"

  template: _.template($('#TASK').html())

  events:

    "click .check"              : "toggleDone",

    "dblclick div.todo-content" : "edit",

    "click span.todo-destroy"   : "clear",

    "keypress .todo-input"      : "updateOnEnter"


    render: (event) -> 

        $(@el).html @template()

        return @



Router = Backbone.Router.extend

    route :

        ""      :     "home"
        task    :     "task"

    initialize : -> {
    
    }

    home : ->

        alert 1

        @changePage new HomeView()


$(->

    alert(1)
    app = new Router()

)


