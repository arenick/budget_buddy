"use strict";

$(document).ready(() => {//load script when document loaded 
//global variables 
let personName = undefined; 
let income = ("");
let foodBud =("");
let entBud =("");
let clothingBud = ("");
let billsBud = ("");
let tracker = undefined; 


// Media Query Function
function mediaQuery(x) {
  if (x.matches) { // If media query matches reset opacity of sidebars to 1 when screen resized to beyond 768px. 
    $(".enterweeklybudget").css("opacity", "1.0");
    $("#purchases").css("opacity", "1.0");
    $(".weekly__total--container").css("opacity", "1.0");

  } else {
      console.log("ERROR");//Log erroe if function somehow fails. 
  }
}

let x = window.matchMedia("(min-width: 769px)")
mediaQuery(x) // Call listener function at run time
x.addListener(mediaQuery) // Attach listener function on state changes

//Function to enter new budget into budget buddy.
let budgetSaver = () => {
  let totalBudget = 0;
  tracker = ".enterweeklybudget"; //Set tracker to track the current "page" as the enter weekly budget page. 

  //Get the values of the budget inputs and strip all non numeric characters then convert there values into integers. 
  foodBud = parseInt($("#food").val().replace(/[^0-9\.]+/g,''));
  entBud = parseInt($("#entertainment").val().replace(/[^0-9\.]+/g,'')); 
  clothingBud = parseInt($("#clothing").val().replace(/[^0-9\.]+/g,''));
  billsBud = parseInt($("#bills").val().replace(/[^0-9\.]+/g,''));
  
  //Remove all alerts added and remove the alert class from the document. 
  $(".alert").removeClass("alert")
  $("#alert_food").remove();
  $("#alert_ent").remove();
  $("#alert_clothing").remove();
  $("#alert_bills").remove();
  $("#alert_total").remove();


 //Check if the inputs had no numeric characters and print the total and remaining of each input to zero if they did not. Else set write the total and remaining given in the users input to the related category on the main "page". Sets the variable that stores the number enter into the input to zero if no number was entered. 
 if(!foodBud){
   $("#food_total").text("$0") 
   $("#food_remaining").text(`Remaining: $0`);
   foodBud = 0;
 }
 else{
   $("#food_total").text("$" + foodBud); 
   $("#food_remaining").text(`Remaining: $${foodBud}`);
 } 

 if(!entBud){
   $("#ent_total").text("$0"); 
   $("#ent_remaining").text(`Remaining: $0`);
   entBud = 0; 
 }else{
   $("#ent_total").text("$" + entBud); 
   $("#ent_remaining").text(`Remaining: $${entBud}`);
 }

 if(!clothingBud){
   $("#clothing_total").text('$0'); 
   $("clothing_remaining").text(`Remaining: $0`); 
   clothingBud = 0;
 }
 else{
   $("#clothing_total").text("$" + clothingBud); 
   $("#clothing_remaining").text(`Remaining: $${clothingBud}`);
 } 

 if(!billsBud){
   $("#bills_total").text("$0");
   $("#bills_remaining").text(`Remaining: $0`); 
   billsBud = 0;
 }
 else{
   $("#bills_total").text("$" + billsBud);
   $("#bills_remaining").text(`Remaining: $${billsBud}`); 
 }


//Get the total budget. 
totalBudget = foodBud + entBud + clothingBud + billsBud;
$("#weekly_tot").text("$" + totalBudget);
$("#total_remaining").text(`Remaining: $${totalBudget}`);

//Call clear function. 
 clear();

};

//Add click button for login on mobile. 
$("body").on("click", ".login_button", (e) => {
    
    //Get persons name from input and store it in a variable. 
    personName = $(".login_form").children().eq(0).val();

    //fade out log in section and toggle classes to display mobile content and allow for screen resize. 
    $("#log_in_section").animate({opacity: 0.0}, 1000, function(){
        //Remove class hidden that displays none on mobile login section. 
        $("#log_in_section").toggleClass("hidden"); 
        //Show enter weekly budget on mobile. 
        $(".enterweeklybudget").toggleClass("hidden");
        //Show all content on desktop. 
        $(".containerdesktop").toggleClass("desktop-hidden");
    });
    //Append entered name to greetings. 
    $(".weekly_budget_title").append(personName + ","); 
    $("#pinsert").append(personName + ",");   
});

//Login in button for desktop. 
$("body").on("click", ".second_login_button", (e) => {
    
  personName = $(".login_form").children().eq(0).val();
  //Fade out log in section. 
  $("#log_in_section").animate({opacity: 0.0}, 1000, function(){
    //Remove log in section.   
    $("#log_in_section").toggleClass("desktop-hidden"); 
    //Show all content. 
      $(".containerdesktop").toggleClass("desktop-hidden");
      //Show the weekly totals on mobile. 
       $(".weekly__total--container").toggleClass("hidden");
       //Hide the login section on mobile. 
       $("#log_in_section").toggleClass("hidden");
       //Sets tracker to weekly total "page".
       tracker = ".weekly__total--container"
  });
  //Appends enter name to greetings. 
  $(".weekly_budget_title").append(personName + ","); 
  $("#pinsert").append(personName + ",");   
});

// Click event for the enter weekly budget save buttons 
$("body").on("click", ".enterweeklybudget .second_save", (e) => {
  budgetSaver();
})
 
$("body").on("click" ,".enterweeklybudget .save", (e) => {

    disablePointer();
    budgetSaver();
    afterSave(tracker);

});

//Function to fade in weekly total "page".
let show = () => {
    $(".weekly__total--container").animate({opacity: 1}, 750);
}

//Function to fade out current mobile "page" and fade in the weekly total. 
let afterSave = (theId) => {
    $(`${theId}`).animate({opacity: 0.0}, 750, function(){
        $(`${theId}`).toggleClass("hidden");
        $(".weekly__total--container").toggleClass("hidden");
        tracker = ".weekly__total--container"; 
        show();
        setTimeout(function(){enablePointer()}, 1500); 
      });
}

//Function to add entered purchases to weekly total. 
let calculateBudget = () => { 

  //Gets item purchases inputs and strips non-numeric characters and then converts them to numbers
  let food_pur = parseInt(document.querySelector("#food-price-log").value.replace(/[^0-9\.]+/g,''));
 
  let ent_pur = parseInt(document.querySelector("#ent-price-log").value.replace(/[^0-9\.]+/g,''));

  let clothing_pur = parseInt(document.querySelector("#clothing-price-log").value.replace(/[^0-9\.]+/g,''));

  let bills_pur = parseInt(document.querySelector("#bills-price-log").value.replace(/[^0-9\.]+/g,''));
  
  let food_re = parseInt(document.querySelector("#food_remaining").textContent.replace(/[^0-9\.]+/g,'')); 
  let ent_rem = parseInt(document.querySelector("#ent_remaining").textContent.replace(/[^0-9\.]+/g,'')); 
  let clothing_rem = parseInt(document.querySelector("#clothing_remaining").textContent.replace(/[^0-9\.]+/g,'')); 

  let bills_rem = parseInt(document.querySelector("#bills_remaining").textContent.replace(/[^0-9\.]+/g,''));

  let total = parseInt(document.querySelector("#total_remaining").textContent.replace(/[^0-9\.]+/g,''));

  // If the inputs are empty set the input value as 0
  if(!total){
    total = 0; 
  }

  if(!food_re){
    food_re = 0; 
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

  // Subtracting the purchase from the total budget
  food_re = food_re - food_pur;
  ent_rem = ent_rem - ent_pur; 
  clothing_rem = clothing_rem - clothing_pur; 
  bills_rem = bills_rem - bills_pur; 

  // If the input values are less than 0 then trigger the alert message
  if (food_re <0) {
    $("#food_total").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_food");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#food_total").parent().append(alert);
    document.getElementById("food_remaining").innerHTML = "Remaning: -$" + Math.abs(food_re);
  }
  else{
    document.getElementById("food_remaining").innerHTML = "Remaning: $" + food_re;
  }

  if (ent_rem <0) {
    $("#ent_total").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_ent");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#ent_total").parent().append(alert);
    document.getElementById("ent_remaining").innerHTML = "Remaining: -$" + Math.abs(ent_rem);
  }
  else{
    document.getElementById("ent_remaining").innerHTML = "Remaining: $" + ent_rem;
  }

  if (clothing_rem <0) {
    $("#clothing_total").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_clothing");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#clothing_total").parent().append(alert);
    document.getElementById("clothing_remaining").innerHTML = "Remaining: -$" + Math.abs(clothing_rem);
  }
  else{
    document.getElementById("clothing_remaining").innerHTML = "Remaining: $" + clothing_rem;
  }

  if (bills_rem <0) {
    $("#bills_total").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_bills");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#bills_total").parent().append(alert);
    document.getElementById("bills_remaining").innerHTML = "Remaining: -$" + Math.abs(bills_rem); 
  }
  else{
    document.getElementById("bills_remaining").innerHTML = "Remaining: $" + bills_rem; 
  }

  total = total - (food_pur + ent_pur + bills_pur + clothing_pur);
  
  if (total <0){
    $("#weekly_tot").addClass("alert");
    let alert = document.createElement("p");
    alert.setAttribute("id","alert_total");
    alert.setAttribute("class","alert");
    alert.innerHTML= "Yo, you need to chill on the spending!"
    $("#weekly_tot").parent().append(alert);
    document.getElementById("total_remaining").innerHTML = "Remaining: -$" + Math.abs(total); 
  }
  else{
    document.getElementById("total_remaining").innerHTML = "Remaining: $" + total; 
  }

}

// Click event for the purchases section save buttons
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


// Clearing the form inputs
let clear = () => {
  document.querySelector("#food-price-log").value = "";
  document.querySelector("#clothing-price-log").value = "";
  document.querySelector("#ent-price-log").value = "";
  document.querySelector("#bills-price-log").value = "";
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
$("body").on("click", "#home", (e) => {
  $('#home').off('click');
  disablePointer(e.target); 
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

$("body").on("click", "#edit_budget", (e) => {
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

$("body").on("click", "#log_purchases", (e) => {
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

// Button disabler and enabler functions
let disablePointer = (el) => {
    $(el).css("pointer-events", "none");
}

let enablePointer = (el) => {
    $(el).css("pointer-events", "auto");
}

});

