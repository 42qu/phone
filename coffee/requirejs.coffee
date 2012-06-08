requirejs.config
    
 
    shim : 

        backbone :
            deps : [
                'underscore'
                'jquery'
            ]

        jquery_mobile : ['jquery']

        jquery_tmpl : ['jquery']

        index : [
            'jquery_mobile'
            'jquery_tmpl'
            'backbone'
        ]

    paths :
        
        jquery : '/js/jquery/1.7.2'

        underscore : '/js/underscore/1.3.3'

        jquery_mobile : '/js/jquery.mobile/1.1.0' 

        jquery_tmpl : '/js/jquery.tmpl/1.0'

        backbone : '/js/backbone/0.9.2' 
        
        index : '/js_dev/index'    
 
require(

    [
        'jquery'
        'underscore'
        'jquery_mobile'
        'jquery_tmpl'
        'backbone'
        'index'
    ], 
    ($) ->
 
        $(document).bind(

            "mobileinit", 
            -> 
                $.mobile.hashListeningEnabled = false;
                $.mobile.pushStateEnabled = false;
        )
)


