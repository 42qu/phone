Backbone.View.prototype.goto =  (uri) -> 

    app.navigate(uri, true);




window.HomeView = Backbone.View.extend


    template: -> $('#HOME').html()

    render: (event) -> 

        $(@el).html @template()
        return @

    events:

        "click .TASK" : -> @goto "TASK"
 

window.TaskView = Backbone.View.extend


    template: -> $('#TASK').html()

 
    render: (event) -> 

        $(@el).html @template()

        return @


    events:

        "click .HOME" : -> @goto "HOME" 
            

Router = Backbone.Router.extend

    routes :

        HOME    :     "HOME"
        TASK    :     "TASK"

    initialize : ->
        @HOME()

    HOME : -> @goto new HomeView()

    TASK : -> @goto new TaskView()


    goto : (page) ->
        $(page.el).attr('data-role', 'page')

        page.render()

        $('body').append page.el

        transition = 'none';
        

        $.mobile.changePage $(page.el), {
            changeHash:false, transition: transition
        }



$(->

    window.app = new Router()

    Backbone.history.start()

)


