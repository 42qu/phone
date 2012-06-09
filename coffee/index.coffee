Note = Backbone.Model.extend

    hi : -> alert 1
    



window.HomeView = Backbone.View.extend


    template: -> $('#HOME').html()

    render: (event) -> 

        note = new Note

            title : "my"

        alert note.cid
        alert note.idAttribute
        console.info note.toJSON()
        note.save()

        $(@el).html @template()

        return @

 

window.TaskView = Backbone.View.extend


    template: -> $('#TASK').html()


    render: (event) -> 

        $(@el).html @template()

        return @



Router = Backbone.Router.extend

    routes :

        ""      :     "home"
        task    :     "task"

    initialize : -> 
        
        @firstPage = true

    home : ->

        @changePage new HomeView()


    changePage : (page) ->

        $(page.el).attr('data-role', 'page')

        page.render()

        console.info(page.el)

        $('body').append page.el

        transition = $.mobile.defaultPageTransition;
        
        if this.firstPage
 
            transition = 'none'

            @firstPage = false

        $.mobile.changePage $(page.el), {
            changeHash:false, transition: transition
        }



$(->

    app = new Router()

    Backbone.history.start()
)


