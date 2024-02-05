"use strict";

                // Dark Themed, Minimalist Portfolio | William S. Johnson, Jr


let firstName, lastName, company, email, phone, comments;

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
    //$("div[class='form_buttons']").hide();
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
        harvest();
    };
};



$(document).ready( () => {

    // Initialize jQuery Widgets (Dialog Box)
    $("#dialog").dialog({           
        autoOpen: false,                
        width: 465,
        hide: { effect: "fadeOut", duration: 1000},
        show: ("highlight",{color:"#ffffff"}, 1000),
        close: function() {                         // You may have to write a function, here,
            fadeOut.play();                         // to handle the clicks of two "confirm"
            $("#opener").attr("disabled", false);   // and "edit" buttons.
        },
        open: function()  {
            $("#submit").hide();
            $("#reset").hide();
            $(".ui-dialog-titlebar-close").hide();
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
                    editForm();
                }
            }
        ]          
    
    });

    // handle click on Form Submit button
    $("#submit").click( evt => {
        evt.preventDefault();
        validate();
    });
    // handle click on Form Reset button
    $("#reset").click( evt => {
        evt.preventDefault();
        startOver();
        console.log("happy birthday")
    });


}); //end doc ready


