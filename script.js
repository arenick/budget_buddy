"use strict";

$(document).ready(() => {

let personName = undefined; 
let personEmail = undefined; 
let income = ("");
let foodEx = (""); 
let entEx = ("");
let clothingEx =  ("")
let billsEx = ("");
let foodBud =("");
let entBud =("");
let clothingBud = ("");
let billsBud = ("");


$("body").on("click", ".login_button", (e) => {
    console.log($(".login_form").children().eq(1).val()); 
    console.log($(".login_form").children().eq(0).val()); 
    personEmail = $(".login_form").children().eq(1).val();
    personName = $(".login_form").children().eq(0).val();
    $("#log_in_section").fadeOut(2000, function(){
        $("#log_in_section").toggleClass("hidden"); 
        $(".enterweeklybudget").toggleClass("hidden");
    });
    $(".weekly_budget_title").append(personName + ","); 
    $("#pinsert").append(personName + ",");
    console.log(personName);
   
});

$("body").on("click" ,".enterweeklybudget .save", (e) => {
     income = $("#weeklyTotal").val();
     foodBud = $("#food").val();
     entBud = $("#entertainment").val(); 
     clothingBud = $("#clothing").val();
     billsBud = $("#bills").val();
    $("#weekly_tot").text(income); 
    $("#food_total").text(foodBud); 
    $("#ent_total").text(entBud); 
    $("#clothing_total").text(clothingBud); 
    $("#bills_total").text(billsBud); 
    $("#total_remaining").text(`Remaining: ${income}`); 
    $("#food_remaining").text(`Remaining: ${foodBud}`); 
    $("#ent_remaining").text(`Remaining: ${entBud}`); 
    $("#clothing_remaining").text(`Remaining: ${clothingBud}`); 
    $("#bills_remaining").text(`Remaining: ${billsBud}`); 

    $(".enterweeklybudget").fadeOut(2000, function(){
        $(".enterweeklybudget").toggleClass("hidden");
        $(".weekly__total--container").toggleClass("hidden");
        WeeklyTotal();
    });
});

 let WeeklyTotal= (e)=>{
     let myMoney= parseInt(income.replace(/[^0-9\.]+/g,''));
     let myFood= parseInt(foodBud.replace(/[^0-9\.]+/g,''));
     let myEnt= parseInt(entBud.replace(/[^0-9\.]+/g,''));
     let myclothes= parseInt(clothingBud.replace(/[^0-9\.]+/g,''));
     let myBills= parseInt(billsBud.replace(/[^0-9\.]+/g,''));
    
 }

});