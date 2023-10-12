$("input").on("focusin", function () {
    if (!$(this).hasClass("error")) {
        $(this).addClass("focus-in");
    }
})

$("input").on("focusout", function () {
    $(this).removeClass("focus-in");
})

let validator = $('#subscribeForm').validate({
    focusInvalid: false,
    onclick: false,
    onfocusout: false,
    rules: {
        firstName: {
            required: true
        },
        lastName: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
        }
    },
    messages: {
        firstName: "First Name cannot be empty",
        lastName: "Last Name cannot be empty",
        email: {
            required: "Email cannot be empty",
            email: "Loos like this is not an email"
        },
        password: "Password cannot be empty"
    }
});