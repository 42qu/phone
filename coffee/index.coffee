


window.HomeView = Backbone.View.extend


    template: -> $('#HOME').html()

    render: (event) -> 

        $(@el).html @template()

        return @

    events:

        "click .TASK" : -> 

            app.navigate("TASK",true)
 

window.TaskView = Backbone.View.extend


    template: -> $('#TASK').html()

 
    render: (event) -> 

        $(@el).html @template()

        return @


    events:

        "click .HOME" : -> 
            
            app.navigate("",true)



Router = Backbone.Router.extend

    routes :

        ""      :     "HOME"
        TASK    :     "TASK"

    initialize : -> 
        
        @firstPage = true

    HOME : ->

        @changePage new HomeView()

    TASK : ->

        @changePage new TaskView()


    changePage : (page) ->

        $(page.el).attr('data-role', 'page')

        page.render()


        $('body').append page.el

        transition = $.mobile.defaultPageTransition;
        
        if this.firstPage
 
            transition = 'none'

            @firstPage = false

        $.mobile.changePage $(page.el), {
            changeHash:false, transition: transition
        }



$(->

    window.app = new Router()

    Backbone.history.start()
)


