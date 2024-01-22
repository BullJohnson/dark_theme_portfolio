"use strict";

                // Dark Themed, Minimalist Portfolio | William S. Johnson, Jr



$(document).ready( () => {

    // handle click on Submit button
    $("#submit").click( evt => {
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
            $("label[for='comments']").next().text("Please enter a comment (required)");
            isValid = false;
        }
        else {
            $("label[for='comments']").next().text("");
        }
        $("#comments").val(comments);

    }); //end submit click event

}); //end doc ready


