"use strict";

$(document).ready(() => {

let personName = undefined; 
let personEmail = undefined; 
let income = ("");
let foodEx = 0; 
let entEx = 0;
let clothingEx =  0;
let billsEx = 0;
let foodBud =("");
let entBud =("");
let clothingBud = ("");
let billsBud = ("");
let tracker = undefined; 
//global variables 
//if(screen size is > 768px){
    //.weekly__total--container.css({opacity: 1.0});
//}

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
   
    
   
 
    if(!income.replace(/[^0-9\.]+/g,'')){
      $("#weekly_tot").text("0"); 
      $("#total_remaining").text(`Remaining: 0`);
    }
    else{
      $("#weekly_tot").text(income); 
      $("#total_remaining").text(`Remaining: ${income}`);
    }

    if(!foodBud.replace(/[^0-9\.]+/g,'')){
      $("#food_total").text("0") 
      $("#food_remaining").text(`Remaining: 0`);
    }
    else{
      $("#food_total").text(foodBud); 
      $("#food_remaining").text(`Remaining: ${foodBud}`);
    } 

    if(!entBud.replace(/[^0-9\.]+/g,'')){
      $("#ent_total").text("0"); 
      $("#ent_remaining").text(`Remaining: 0`);
    }else{
      $("#ent_total").text(entBud); 
      $("#ent_remaining").text(`Remaining: ${entBud}`);
    }

    if(!clothingBud.replace(/[^0-9\.]+/g,'')){
      $("#clothing_total").text('0'); 
      $("clothing_remaining").text(`Remaining: 0`); 
    }
    else{
      $("#clothing_total").text(clothingBud); 
      $("#clothing_remaining").text(`Remaining: ${clothingBud}`);
    } 

    if(!parseInt(billsBud.replace(/[^0-9\.]+/g,''))){
      $("#bills_total").text("0");
      $("#bills_remaining").text(`Remaining: 0`); 
    }
    else{
      $("#bills_total").text(billsBud);
      $("#bills_remaining").text(`Remaining: ${billsBud}`); 
    }

    $(".enterweeklybudget").animate({opacity: 0.0}, 1000, function(){
        $(".enterweeklybudget").toggleClass("hidden");
        $(".weekly__total--container").toggleClass("hidden");
        tracker = ".weekly__total--container"; 
        console.log(tracker);
      });
    // WeeklyTotal();
    //if(opacity of .weekly__total--container){
      show();
    //}
});

let show = () => {
    $(".weekly__total--container").animate({opacity: 1}, 1000);
}

$("body").on("click", "#purchases #pur-log .save, ", (e) => {
    let myMoney = parseInt(income.replace(/[^0-9\.]+/g,''));
    let myFood = parseInt(foodBud.replace(/[^0-9\.]+/g,''));
    let myEnt = parseInt(entBud.replace(/[^0-9\.]+/g,''));
    let myclothes = parseInt(clothingBud.replace(/[^0-9\.]+/g,''));
    let myBills = parseInt(billsBud.replace(/[^0-9\.]+/g,'')); 

    let food_pur = parseInt(document.querySelector("#food-price-log").value.replace(/[^0-9\.]+/g,''));
   
    let ent_pur = parseInt(document.querySelector("#ent-price-log").value.replace(/[^0-9\.]+/g,''));

    let clothing_pur = parseInt(document.querySelector("#clothing-price-log").value.replace(/[^0-9\.]+/g,''));

    let bills_pur = parseInt(document.querySelector("#bills-price-log").value.replace(/[^0-9\.]+/g,''));
    
    let food_re = parseInt(document.querySelector("#food_remaining").textContent.replace(/[^0-9\.]+/g,'')); 
    let ent_rem = parseInt(document.querySelector("#ent_remaining").textContent.replace(/[^0-9\.]+/g,'')); 
    let clothing_rem = parseInt(document.querySelector("#clothing_remaining").textContent.replace(/[^0-9\.]+/g,'')); 

    let bills_rem = parseInt(document.querySelector("#bills_remaining").textContent.replace(/[^0-9\.]+/g,''));

    let total = parseInt(document.querySelector("#total_remaining").textContent.replace(/[^0-9\.]+/g,''));

    if(!total){
      total = 0; 
    }

    if(!food_re){
      food_re = 0; 
      console.log(food_re);
    }
   
    if(!ent_rem){
      ent_rem = 0; 
    }

    if(!clothing_rem){
      clothing_rem = 0; 
    }

    if(!bills_rem){
      bills_rem = 0; 
    }

    if(!food_pur){
      food_pur = 0;
    }
    if(!ent_pur){
      ent_pur = 0; 
    }
    if(!clothing_pur){
      clothing_pur = 0; 
    }
    if(!bills_pur){
      bills_pur = 0; 
    }

    food_re = food_re - food_pur;
    ent_rem = ent_rem - ent_pur; 
    clothing_rem = clothing_rem - clothing_pur; 
    bills_rem = bills_rem - bills_pur; 

    


    total = total - (food_pur + ent_pur + bills_pur + clothing_pur); 


    document.getElementById("food_remaining").innerHTML = "Remaning: " + food_re; 
    document.getElementById("ent_remaining").innerHTML = "Remaning: " + ent_rem; 
    document.getElementById("clothing_remaining").innerHTML = "Remaining: " + clothing_rem; 
    document.getElementById("bills_remaining").innerHTML = "Remaining: " + bills_rem; 
    document.getElementById("total_remaining").innerHTML = "Remaining: " + total; 
});
 

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

let calculateBudget = () => {
  let weekly_budget = parseInt(document.querySelector(".weekly"))
}


}); 


