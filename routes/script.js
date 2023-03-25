$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


let getInTouchButton = document.getElementById("getInTouchButton");
let name = document.getElementById("name");
let email = document.getElementById("email");
let text = document.getElementById("textbox");

getInTouchButton.addEventListener("click", () => {
    let subject = "Get to know request"
    let bodyText = `Name: ${name.value}
    Message: ${text.value}`
    window.open(`mailto:peepal.412@gmail.com?subject=${subject}&body=${bodyText}`);
})