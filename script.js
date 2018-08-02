"use strict";

$(document).ready(() => {

let personName = undefined; 
let personEmail = undefined; 
let income = 0; 
let foodEx = 0; 
let entEx = 0; 
let clothingEx = 0; 
let billsEx = 0; 
let incomeBud = 0; 
let foodBud = 0; 
let entBud = 0; 
let clothingBud = 0; 
let billsBud = 0; 


$("body").on("click", ".login_button", (e) => {
    console.log($(".login_form").children().eq(1).val()); 
    console.log($(".login_form").children().eq(0).val()); 
    personEmail = $(".login_form").children().eq(1).val();
    personName = $(".login_form").children().eq(0).val();
    $("#log_in_section").fadeOut(2000, function(){
        $("#log_in_section").toggleClass("hidden"); 
        $("#purchases").toggleClass("hidden");
    });
    $(".weekly_budget_title").append(personName); 
    $("#pinsert").append(personName);
    console.log(personName);
   
});

$("body").on("click" ,".enterweeklybudget .save", (e) => {
     income = $("#WeeklyTotal").val();
     foodBud = $("#Food").val();
     entBud = $("#Entertainment").val(); 
     clothingBud = $("#Clothing").val();
     billsBud = $("#Bills").val();
    $(".enterweeklybudget").fadeOut(2000, function(){
        $(".enterweeklybudget").toggleClass("hidden");
        $(".weekly__total--container").toggleClass("hidden");
    });
});


});