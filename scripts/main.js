$(document).ready(function(){

    $('.signup').click(function(){
        $('#loginForm').hide();
        $('#signUpForm').fadeIn('slow');
    })

    $('.login').click(function(){
        $('#signUpForm').hide();
        $('#loginForm').fadeIn('slow');
        
    })
    
        
        

})