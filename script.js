"use strict";

$(document).ready(() => {

let personName = undefined; 
let income = ("");
let foodBud =("");
let entBud =("");
let clothingBud = ("");
let billsBud = ("");
let tracker = undefined; 
let alertToggle = 0;
//global variables 

function mediaQuery(x) {
  if (x.matches) { // If media query matches
    console.log("changed");
    $(".enterweeklybudget").css("opacity", "1.0");
    $("#purchases").css("opacity", "1.0");

  } else {
      console.log("ERROR");
  }
}

let x = window.matchMedia("(min-width: 769px)")
mediaQuery(x) // Call listener function at run time
x.addListener(mediaQuery) // Attach listener function on state changes

let budgetSaver = () => {
  tracker = ".enterweeklybudget"; 
  // income = $("#weeklyTotal").val().replace(/[^0-9\.]+/g,'');
  foodBud = $("#food").val().replace(/[^0-9\.]+/g,'');
  entBud = $("#entertainment").val().replace(/[^0-9\.]+/g,''); 
  clothingBud = $("#clothing").val().replace(/[^0-9\.]+/g,'');
  billsBud = $("#bills").val().replace(/[^0-9\.]+/g,'');
  $(".alert").removeClass("alert")
  $("#alert_food").remove();
  $("#alert_ent").remove();
  $("#alert_clothing").remove();
  $("#alert_bills").remove();
  $("#alert_total").remove()
 
 if(!income){
   $("#weekly_tot").text("$0"); 
   $("#total_remaining").text(`Remaining: $0`);
   console.log("q");
 }
 else{
   $("#weekly_tot").text("$" + income); 
   $("#total_remaining").text(`Remaining: $${income}`);
   console.log("r"); 
 }

 if(!foodBud){
   $("#food_total").text("$0") 
   $("#food_remaining").text(`Remaining: $0`);
 }
 else{
   $("#food_total").text("$" + foodBud); 
   $("#food_remaining").text(`Remaining: $${foodBud}`);
 } 

 if(!entBud){
   $("#ent_total").text("$0"); 
   $("#ent_remaining").text(`Remaining: $0`);
 }else{
   $("#ent_total").text("$" + entBud); 
   $("#ent_remaining").text(`Remaining: $${entBud}`);
 }

 if(!clothingBud){
   $("#clothing_total").text('$0'); 
   $("clothing_remaining").text(`Remaining: $0`); 
 }
 else{
   $("#clothing_total").text("$" + clothingBud); 
   $("#clothing_remaining").text(`Remaining: $${clothingBud}`);
 } 

 if(!billsBud){
   $("#bills_total").text("$0");
   $("#bills_remaining").text(`Remaining: $0`); 
 }
 else{
   $("#bills_total").text("$" + billsBud);
   $("#bills_remaining").text(`Remaining: $${billsBud}`); 
 }



 clear();

};

$("body").on("click", ".login_button", (e) => {
    
    personName = $(".login_form").children().eq(0).val();
    $("#log_in_section").animate({opacity: 0.0}, 1000, function(){
        $("#log_in_section").toggleClass("hidden"); 
        $(".enterweeklybudget").toggleClass("hidden");
        $(".containerdesktop").toggleClass("desktop-hidden");
    });
    $(".weekly_budget_title").append(personName + ","); 
    $("#pinsert").append(personName + ",");   
});

$("body").on("click", ".second_login_button", (e) => {
    
  personName = $(".login_form").children().eq(0).val();
  $("#log_in_section").animate({opacity: 0.0}, 1000, function(){
      $("#log_in_section").toggleClass("desktop-hidden"); 
      $(".containerdesktop").toggleClass("desktop-hidden");
       $(".weekly__total--container").toggleClass("hidden");
       $("#log_in_section").toggleClass("hidden");
       tracker = "#purchases"
  });
  $(".weekly_budget_title").append(personName + ","); 
  $("#pinsert").append(personName + ",");   
});

$("body").on("click", ".enterweeklybudget .second_save", (e) => {
  budgetSaver();
})

$("body").on("click" ,".enterweeklybudget .save", (e) => {

    disablePointer();
    budgetSaver();
    afterSave(tracker);

});

let show = () => {
    $(".weekly__total--container").animate({opacity: 1}, 750);
}

let afterSave = (theId) => {
    $(`${theId}`).animate({opacity: 0.0}, 750, function(){
        $(`${theId}`).toggleClass("hidden");
        $(".weekly__total--container").toggleClass("hidden");
        tracker = ".weekly__total--container"; 
        show();
        setTimeout(function(){enablePointer()}, 1500); 
      });
}

let calculateBudget = () => {
  parseInt(income.replace(/[^0-9\.]+/g,''));
  parseInt(foodBud.replace(/[^0-9\.]+/g,''));
  parseInt(entBud.replace(/[^0-9\.]+/g,''));
  parseInt(clothingBud.replace(/[^0-9\.]+/g,''));
  parseInt(billsBud.replace(/[^0-9\.]+/g,'')); 

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
  
  if (food_re <0) {
    $("#food_total").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_food");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#food_total").parent().append(alert);
  }

  if (ent_rem <0) {
    $("#ent_total").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_ent");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#ent_total").parent().append(alert);
  }

  if (clothing_rem <0) {
    $("#clothing_total").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_clothing");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#clothing_total").parent().append(alert);
  }

  if (bills_rem <0) {
    $("#bills_total").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_bills");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#bills_total").parent().append(alert);
  }

  total = total - (food_pur + ent_pur + bills_pur + clothing_pur);
  
  if (total <0){
    $("#weekly_tot").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_total");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#weekly_tot").parent().append(alert);
  }

  document.getElementById("food_remaining").innerHTML = "Remaning: $" + food_re; 
  document.getElementById("clothing_remaining").innerHTML = "Remaining: $" + clothing_rem;
  document.getElementById("ent_remaining").innerHTML = "Remaining: $" + ent_rem;
  document.getElementById("bills_remaining").innerHTML = "Remaining: $" + bills_rem; 
  document.getElementById("total_remaining").innerHTML = "Remaining: $" + total; 
}

$("body").on("click", "#purchases #pur-log .second_save", () => {
  calculateBudget();
  clear();
});

$("body").on("click", "#purchases #pur-log .save", () => {
    tracker = "#purchases";
    disablePointer();
    calculateBudget();
    afterSave(tracker);
    clear();
});

let clear = () => {
  document.querySelector("#food-price-log").value = "";
  document.querySelector("#clothing-price-log").value = "";
  document.querySelector("#ent-price-log").value = "";
  document.querySelector("#bills-price-log").value = "";
  document.querySelector("#weeklyTotal").value = "";
  document.querySelector("#food").value = "";
  document.querySelector("#clothing").value = "";
  document.querySelector("#entertainment").value = "";
  document.querySelector("#bills").value = "";
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

