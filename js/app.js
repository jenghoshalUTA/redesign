$(function(){

    /*Navigation
    1 - menu toggler
    2- dropdown toggle
    */

    //menu
    //1 listen for click on .navbar-toggle
    //2 store property in "data-target" attribute
    //3 use attribute value to select desired nav
    $(".navbar-toggle").on("click", function(){
        let toggler = $(this).attr("data-target");
        $(toggler).toggleClass("open");
    })

    //dropdown
    //1 - listen for click on .dropdown > a
    //2 - toggle open class on .dropdown element
    /*$(".navbar .dropdown > a").hover(function(){
        $(this).parent().toggleClass("open");
})*/

})