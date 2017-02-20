/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function toHome() {
    $('.head').animatescroll({ scrollSpeed: 1500, easing: 'easeInOutExpo' });
    closeNav();
}

function toAbout() {
    $('.about').animatescroll({ scrollSpeed: 1500, easing: 'easeInOutExpo' });
    closeNav();
}

function toWhy() {
    $('.portfolio').animatescroll({ scrollSpeed: 1500, easing: 'easeInOutExpo' });
    closeNav();
}

function toServices() {
    $('.services').animatescroll({ scrollSpeed: 1500, easing: 'easeInOutExpo' });
    closeNav();
}

function toContact() {
    $('.contact').animatescroll({ scrollSpeed: 1500, easing: 'easeInOutExpo' });
    closeNav();
}

$(document).ready(function() {

    var width = $(".abt-img").css("width");
    var x = width + "10px";

    $(".abt-img").mouseenter(function() {
        $(this).css({ "width": x, "transition": "ease-in 0.5s" });
    });
    $(".abt-img").mouseleave(function() {
        $(this).css({ "width": x, "transition": "ease-out 0.5s" });
    });


})

$(document).ready(function() {

    $(".cont").mouseenter(function() {
        $(this).fadeTo('fast', 0.7)
    });
    $(".cont").mouseleave(function() {
        $(this).fadeTo('fast', 1.0)
    });
});

function slideHide() {

    $(".runningform").slideToggle(1000)
    $(".thanks").slideToggle(1000)
    var name = $("#name").val();

    $("#namer").html(name)
}

function postForm(obj, event) {

    event.preventDefault();
    $.post("http://api.tackter.io/api/UserForms", $(obj).serialize(), slideHide);




}


// Year Get Function
function YearGet() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("Year").innerHTML = n;
}
YearGet();


$(document).ready(function() {
    $("#titletext").slideToggle(1000, function() {
        $("#sub").fadeToggle(1000)
    })

})