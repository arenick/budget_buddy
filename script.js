"use strict";

$(document).ready(() => {

let n = undefined; 


$("body").on("click", ".login_button", (e) => {
    console.log($(".login_form").children().eq(1).val()); 
    console.log($(".login_form").children().eq(0).val()); 
    &("#log_in_section").toggleClass(hidden); 
})


});