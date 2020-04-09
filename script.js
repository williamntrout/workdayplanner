// declarations

var t9 = document.querySelector(".t9").textContent;
t9 = parseInt(t9[0]);
var d9 = document.querySelector(".d9");


// save descriptions

$(".b9").on("click", function () {
    var descriptionEntry = $(".t9").val();
    localStorage.setItem("9:00", descriptionEntry);
    console.log('b9 was clicked');
});
$(".t9").val(localStorage.descriptionEntry("9:00"));