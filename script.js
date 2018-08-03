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
let tracker = undefined; 
//global variables 


$("body").on("click", ".login_button", (e) => {
    
    personEmail = $(".login_form").children().eq(1).val();
    personName = $(".login_form").children().eq(0).val();
    $("#log_in_section").animate({opacity: 0.0}, 1000, function(){
        $("#log_in_section").toggleClass("hidden"); 
        $(".enterweeklybudget").toggleClass("hidden");
    });
    $(".weekly_budget_title").append(personName + ","); 
    $("#pinsert").append(personName + ",");
    
     
});

$("body").on("click" ,".enterweeklybudget .save", (e) => {
     tracker = ".weekly__total--container"; 
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

    $(".enterweeklybudget").animate({opacity: 0.0}, 1000, function(){
        $(".enterweeklybudget").toggleClass("hidden");
        $(".weekly__total--container").toggleClass("hidden");
        tracker = ".weekly__total--container"; 
        console.log(tracker);
      });
    WeeklyTotal();
});

 let WeeklyTotal = (e) => {
  $(".weekly__total--container").animate({opacity: 1}, 1000);
     let myMoney= parseInt(income.replace(/[^0-9\.]+/g,''));
     let myFood= parseInt(foodBud.replace(/[^0-9\.]+/g,''));
     let myEnt= parseInt(entBud.replace(/[^0-9\.]+/g,''));
     let myclothes= parseInt(clothingBud.replace(/[^0-9\.]+/g,''));
     let myBills= parseInt(billsBud.replace(/[^0-9\.]+/g,'')); 
 }

// Hamburger Menu Slide Down Click Event
$("body").on("click", "section ul a.burger", (e) => {
  $("ul.mobile_menu").slideToggle(1000);
});

// Click Event for menu items
let homeButton = $("body").on("click", "#home", (e) => {
  $('#home').off('click');
  disablePointer(e.target); 
  console.log(e);
  if(tracker === ".weekly__total--container"){
    setTimeout(function(){enablePointer(e.target);}, 1);
    return; 
  }
  else if (tracker === "#purchases") {
    $("#purchases").animate({opacity: 0.0}, 750, function(){
      $("#purchases").toggleClass("hidden");
      $(".weekly__total--container").toggleClass("hidden");
      $(".weekly__total--container").animate({opacity: 1.0}, 750, function(){
        tracker = ".weekly__total--container"; 
        $('#home').on('click');
        setTimeout(function(){enablePointer(e.target);}, 1500);
      });
    }); 
  }
  else if(tracker === ".enterweeklybudget"){
    $(".enterweeklybudget").animate({opacity: 0.0},750, function(){
      $(".enterweeklybudget").toggleClass("hidden");
      $(".weekly__total--container").toggleClass("hidden");
      $(".weekly__total--container").animate({opacity: 1.0}, 750, function(){
        tracker = ".weekly__total--container"; 
        $('#home').on('click');
        setTimeout(function(){enablePointer(e.target);}, 1500);
      });
    })

  }
  else{
    setTimeout(function(){enablePointer(e.target);}, 1);
  }

 
}); 

let editButton = $("body").on("click", "#edit_budget", (e) => {
  console.log(e.target);
  disablePointer(e.target);
  if(tracker === ".enterweeklybudget"){
    setTimeout(function(){enablePointer(e.target);}, 1);
    return; 
  }
  else if (tracker === "#purchases") {
    $("#purchases").animate({opacity: 0.0}, 750, function(){
      $("#purchases").toggleClass("hidden");
      $(".enterweeklybudget").toggleClass("hidden");
      $(".enterweeklybudget").animate({opacity: 1.0}, 750, function(){
        tracker = ".enterweeklybudget"; 
        setTimeout(function(){enablePointer(e.target);}, 1500);
      });
    }); 
  }
  else if(tracker === ".weekly__total--container"){
    $(".weekly__total--container").animate({opacity: 0.0}, 750, function(){
      $(".weekly__total--container").toggleClass("hidden");
      $(".enterweeklybudget").toggleClass("hidden");
      $(".enterweeklybudget").animate({opacity : 1.0}, 750, function(){
        tracker = ".enterweeklybudget"; 
        setTimeout(function(){enablePointer(e.target);}, 1500);
      });
    })
  }
  else{
    setTimeout(function(){enablePointer(e.target);}, 1);
  }

 
}); 

let logButton = $("body").on("click", "#log_purchases", (e) => {
  console.log(e);
  disablePointer(e.target);
  if(tracker === "#purchases"){
    setTimeout(function(){enablePointer(e.target);}, 1);
    return; 
  }
  else if (tracker === ".weekly__total--container") {
    $("#purchases").animate({opacity: 0.0}, 750, function(){
      $("#purchases").toggleClass("hidden");
      $(".weekly__total--container").toggleClass("hidden");
      $("#purchases").animate({opacity: 1.0}, 750, function(){
        tracker = "#purchases"; 
        setTimeout(function(){enablePointer(e.target);}, 1500);
      });
    }); 
  }
  else if(tracker === ".enterweeklybudget"){
    $("#purchases").animate({opacity: 0.0}, 750, function(){
      $(".enterweeklybudget").toggleClass("hidden");
      $("#purchases").toggleClass("hidden");
      $("#purchases").animate({opacity: 1.0}, function(){
        tracker = "#purchases"; 
        setTimeout(function(){enablePointer(e.target)}, 1500);
      });
    })
  }
  else{
    setTimeout(function(){enablePointer(e.target);}, 1);
  }

 
 
}); 
console.log(homeButton);
console.log(editButton);
console.log(editButton);

let disablePointer = (el) => {
    $(el).css("pointer-events", "none");
    
}

let enablePointer = (el) => {
    $(el).css("pointer-events", "auto");
}


}); 
