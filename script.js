$(document).ready(function(){

    //load the index page
    $("#mycontent").load("home.html");

    //event handler for the nav menu
    $('ul.nav li a').on('click',function(){
        var page=$(this).data("target");
        if(page=="signup"){
            $("#mycontent").removeClass("container");
            $("#mycontent").removeClass("center-div");
        }
        else{
            $("#mycontent").addClass("container");
            $("#mycontent").addClass("center-div");
        }
        $('#mycontent').load(page + '.html');
    });


    $('#mycontent').on('keyup','#srch-term',function(){
        var name=$('#srch-term').val();
        $.post("suggestion.php",{
            suggestion:name
        }, function (data,status){
            $('#mynames').html(data);
        });
    });

    //event handler for signup submit button
    $('#mycontent').on('click','#signmeup',function(){
        var fname=$("#fname").val();
        var lname=$("#lname").val();
        var email=$("#email").val();
        var password=$("#password").val();
        $.post("reg.php",{
            myfname:fname,
            mylname:lname,
            myemail:email,
            mypassword:password
        }, function (data,status){
            if(data.toString()=="Error")
              {
                  $('#mynames').html(data);
                 $('#mynames').text($('#mynames').text () +" Some Fields are missing");
              }
             else{
                $("#mycontent").addClass("container");
                $("#mycontent").addClass("center-div");
                $('#mynames').text(" ");
                $('#mycontent').html(data);
             }

        });
    });
});