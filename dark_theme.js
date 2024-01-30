"use strict";

                // Dark Themed, Minimalist Portfolio | William S. Johnson, Jr


//functon to gather and display user input for confirmation, before sending                
function harvest () {
    $("div[class='form_buttons']").css("display", "none");
};



//Function to Validate Contact Form Entries
function validate (evt){
    let isValid = true;

    //validate first name entry
    const firstName = $("#first_name").val().trim();
    if (firstName =="") {
        $("#first_name").next().text("This field is required.");
        isValid = false;
    }
    else {
        $("#first_name").next().text("");
    }
    $("#first_name").val(firstName);


    //validate last name entry
    const lastName = $("#last_name").val().trim();
    if (lastName == "") {
        $("#last_name").next().text("This field is required");
        isValid = false;
    }
    else {
        $("#last_name").next().text("");
    }
    $("#last_name").val(lastName);


    //validate email address
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email = $("#email_1").val().trim();
    if (email == "") {
        $("#email_1").next().text("This field is required.");
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        $("#email_1").next().text("Must be a valid email address");
        isValid = false;
    }
    else {
        $("#email_1").next().text("");
    }
    $("#email_1").val(email);


    //validate comments section
    const comments = $("#comments").val().trim();
    if (comments == "") {
        $("label[for='comments']").next().text("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Please enter a comment (required)");
        isValid = false;
    }
    else {
        $("label[for='comments']").next().text("");
    }
    $("#comments").val(comments);

    //prevent default action if any entries are invalid
    if (isValid == true) {
        harvest();
    }else{
        evt.preventDefault();
    }
};



$(document).ready( () => {

    // handle click on Form Submit button
    $("#submit").click( evt => {
        validate(evt);
    });

}); //end doc ready


