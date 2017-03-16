// JavaScript Document

console.log("reading");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.inputs.onsubmit = processForm;

    // make a function to read the form
    function processForm() {
        // put each input in its own js variable
        var anonymous = document.inputs.anonymous.value;
        var bullyName = document.inputs.bullyName.value;
        var victimName = document.inputs.victimName.value;
        var location = document.inputs.location.value;
        var time = document.inputs.time.value;
        var description = document.inputs.description.value;


        if (anonymous == "" || bullyName == "" || victimName == "" || description == "") {
            alert("Please complete the form and try again.");
        } else {
            alert("Thank you for reporting this incident, you're helping to keep your school safe.");
            resetForm();
        }

        return false;
    }



});
