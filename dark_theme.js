"use strict";

                // Dark Themed, Minimalist Portfolio | William S. Johnson, Jr


let firstName, lastName, company, email, phone, comments, screenWidth, dialogWidth;

//function to adjust dialob box to fit mobile device
function determineBoxWidth () {
    screenWidth = window.screen.width;
    if (screenWidth < 700) {
        dialogWidth = screenWidth * .9;
    } else {
        dialogWidth = 465;
    }
};

//function to handle clicking of confirmed button in dialog box
function confirmed () {
    //$("#contact_form").submit();
    setTimeout(startOver, 1000);
    setTimeout( () => {
        $("#dialog").dialog("open");
        $("#confirm, #edit").hide();
        const heading = "<h4 className=\"ui-state-default ui-corner-all ui-helper-clearfix\" style=\"padding:4px; background: #018f23; text-align: center; margin-top: 0;\">Your Contact Request Has Been Sent<h4>"
        //$("#dialog").dialog("option", "position", {my:"center", at:"top+70%", of:"#contact_form"});
        $("#dialog").dialog("option", "title", "Confirmation");
        results.innerHTML = heading;
        }, 1000);
    setTimeout( () => {
        $("#dialog").dialog("close");
        setTimeout( () => {
            $("#confirm, #edit").show(1000);
            $("#dialog").dialog("option", "title", "Confirm Your Entry Details");
        }, 1500);
    }, 5000);
    
};

//function to reset form spans
function startOver () {
    $("#first_name").val("");
    $("#last_name").val("");
    $("#company").val("");
    $("#email_1").val("");
    $("#phone").val("");
    $("#comments").val("");

    $("#first_name").next().text("*");
    $("#last_name").next().text("*");
    $("#email_1").next().text("*")
    $("label[for='comments']").next().text("*");
};

//functon to gather and display user input for confirmation, before sending                
function harvest () {
    //Create a javaScript object from form data
    let formEntries = new Object();
    formEntries.firstName = firstName;
    formEntries.lastName = lastName;
    formEntries.company = company;
    formEntries.email = email;
    formEntries.phone = phone;
    formEntries.comments = comments;
    //Converting the javaScript Object To a JSON Object
    const formData = JSON.stringify(formEntries);
    //Parsing the JSON object & creating a heading for dialog box.
    const boxDisplay = JSON.parse(formData);
    //const heading = "<h4 className=\"ui-state-default ui-corner-all ui-helper-clearfix\" style=\"padding:4px; background: #018f23; text-align: center; margin-top: 0;\">Your Contact Request & Json Data<h4>"
    //Displaying the input values, within the dialog box, as a confirmation for the user
    results.innerHTML = "<br>" + "Name:&emsp;" + boxDisplay.firstName + "&emsp;" + boxDisplay.lastName + 
        "<br>" + "Company:&emsp;" + boxDisplay.company + "<br>" + "Email:&emsp;" + boxDisplay.email + 
        "<br>" + "Phone:&emsp;" + boxDisplay.phone + "<br><br>" + "Comments:&emsp;<br>" + 
        boxDisplay.comments + "<br><br>" + "JSON:<br>" + formData;
};



//Function to Validate Contact Form Entries
function validate () {
    let isValid = true;

    //validate first name entry
    firstName = $("#first_name").val().trim();
    if (firstName =="") {
        $("#first_name").next().text("This field is required.");
        isValid = false;
    }
    else {
        $("#first_name").next().text("");
    }
    $("#first_name").val(firstName);


    //validate last name entry
    lastName = $("#last_name").val().trim();
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
    email = $("#email_1").val().trim();
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
    comments = $("#comments").val().trim();
    if (comments == "") {
        $("label[for='comments']").next().text("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Please enter a comment (required)");
        isValid = false;
    }
    else {
        $("label[for='comments']").next().text("");
    }
    $("#comments").val(comments);


    //validate non-required fields
    company = $("#company").val().trim();
    if (company == "" && isValid == true) {
        company = "N/A";
    }
    $("#company").val(company);

    phone = $("#phone").val().trim();
    if (phone == "" && isValid ==true){
        phone = "No Entry";
    }
    $("#phone").val(phone);


    //Open dialog box if all entries are valid
    if (isValid == true) {
        $("#dialog").dialog("open");
        $("#dialog").dialog("option", "position", {my:"center", at:"top+20%", of:"#contact_form"});
        harvest();
    };
};



$(document).ready( () => {
    determineBoxWidth();

    // Initialize jQuery Widgets (Dialog Box)
    $("#dialog").dialog({           
        autoOpen: false,
        //modal: true,
        position: { my: "center", at: "top+25%", of:"#contact_form"},
        //width: 465,
        width: dialogWidth,
        hide: { effect: "fadeOut", duration: 1000},
        show: ("highlight",{color:"#ffffff"}, 1000),
        close: function() {
           // fadeOut.play();    This line does nothing. It was brought over from Alien App
           $("#submit, #reset, button[class='download_cv']").show();
           $("#first_name, #last_name, #company, #email_1, #phone, #comments").removeAttr("readonly");  
        },
        open: function()  {
            $(".ui-dialog-titlebar-close").hide();
            $("#submit, #reset, button[class='download_cv']").hide();
            $("#first_name, #last_name, #company, #email_1, #phone, #comments").attr("readonly", "readonly");
        },
        buttons: [
            {
                id: "confirm",
                text: "Confirm",
                click: function() {
                    $(this).dialog("close");
                    confirmed();
                }
            },
            {
                id: "edit",
                text: "Edit",
                click: function() {
                    $(this).dialog("close");
                }
            }
        ]              
    });

    // handle click on Form Submit button
    $("#submit").click( evt => {
        //evt.preventDefault();
        validate();
    });
    // handle click on Form Reset button
    $("#reset").click( evt => {
        evt.preventDefault();
        startOver();
        console.log("happy birthday")
    });


}); //end doc ready


