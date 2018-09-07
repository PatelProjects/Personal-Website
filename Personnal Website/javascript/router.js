app.router = Backbone.Router.extend({
    routes: {
        '': 'home',
        '#': 'home',
        'computer-introduction': 'csIntro',
        'computer-timeline': 'csTimeLine',
        'computer-projects': 'csProj',
        'computer': 'cs',
        'business-administration': 'ba',
        'business-introduction': 'baIntro',
        'default': 'unknown'
    },
    
    
    home: function(){
        $(".is-visible").removeClass("is-visible");
        $(".home").addClass("is-visible");
    },
    
    csIntro: function(){
        $(window).load(function(){
            document.getElementById('intro').scrollIntoView({block: "center", behavior: "smooth"});
        });
        
        $( document ).ready(function() {
            document.getElementById('intro').scrollIntoView({block: "center", behavior: "smooth"});
        });
     
    },
    
    csTimeLine: function(){
        $(window).load(function(){
            document.getElementById('timeline').scrollIntoView({block: "center", behavior: "smooth"});
        });
        
        $( document ).ready(function() {
            document.getElementById('timeline').scrollIntoView({block: "center", behavior: "smooth"});
        });
    },
    
    csProj: function(){
        $(window).load(function(){
            document.getElementById('projects1').scrollIntoView({block: "start", behavior: "smooth"});
        });
        
         $( document ).ready(function() {
             document.getElementById('projects1').scrollIntoView({block: "start", behavior: "smooth"});
        });
    },
    
  
    
    
    ba: function(){
        $(".is-visible").removeClass("is-visible");
        $(".bus").addClass("is-visible");
    },
    
    baIntro: function(){
        $(window).load(function(){
            document.getElementById('intro').scrollIntoView({block: "center", behavior: "smooth"});
        });
        
        $( document ).ready(function() {
            document.getElementById('intro').scrollIntoView({block: "center", behavior: "smooth"});
        });
     
    }
    

    
    
});