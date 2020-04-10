// save descriptions to local storage. description needs to display if saved. 
// button click triggers save and display.
// information entered in text area goes to local storage
// description is saved in text area until removed
// need to add feature to "un-save and clear"

var t9 = document.querySelector(".t9").textContent;
t9 = parseInt(t9[0]);
var d9 = document.querySelector(".d9");
var b9 = document.querySelector(".b9");

$(".b9").on("click", function () {
    var descriptionEntry = $(".d9").val();
    localStorage.setItem("9:00", descriptionEntry);
    console.log("b9 was clicked");
});

var hold = localStorage.getItem("9:00");
$(".d9").val(hold);

$(".b10").on("click", function () {
    var descriptionEntry = $(".d10").val();
    localStorage.setItem("10:00", descriptionEntry);
    console.log("b10 was clicked");
});

var hold = localStorage.getItem("10:00");
$(".d10").val(hold);

$(".b11").on("click", function () {
    var descriptionEntry = $(".d11").val();
    localStorage.setItem("11:00", descriptionEntry);
    console.log("b11 was clicked");
});

var hold = localStorage.getItem("11:00");
$(".d11").val(hold);

$(".b12").on("click", function () {
    var descriptionEntry = $(".d12").val();
    localStorage.setItem("12:00", descriptionEntry);
    console.log("b12 was clicked");
});

var hold = localStorage.getItem("12:00");
$(".d12").val(hold);

$(".b1").on("click", function () {
    var descriptionEntry = $(".d1").val();
    localStorage.setItem("1:00", descriptionEntry);
    console.log("b1 was clicked");
});

var hold = localStorage.getItem("1:00");
$(".d1").val(hold);

$(".b2").on("click", function () {
    var descriptionEntry = $(".d2").val();
    localStorage.setItem("2:00", descriptionEntry);
    console.log("b9 was clicked");
});

var hold = localStorage.getItem("2:00");
$(".d2").val(hold);

$(".b3").on("click", function () {
    var descriptionEntry = $(".d3").val();
    localStorage.setItem("3:00", descriptionEntry);
    console.log("b3 was clicked");
});

var hold = localStorage.getItem("3:00");
$(".d3").val(hold);

$(".b4").on("click", function () {
    var descriptionEntry = $(".d4").val();
    localStorage.setItem("4:00", descriptionEntry);
    console.log("b4 was clicked");
});

var hold = localStorage.getItem("4:00");
$(".d4").val(hold);

$(".b5").on("click", function () {
    var descriptionEntry = $(".d5").val();
    localStorage.setItem("5:00", descriptionEntry);
    console.log("b5 was clicked");
});

var hold = localStorage.getItem("5:00");
$(".d5").val(hold);