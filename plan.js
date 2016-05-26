// On create plan:
//document.getElementsByName('ownerId')[0].value = getCookie("id");

$(".importance").mousemove(function(event) {
	var starWidth = $(this).width()/3;
	var v = (event.pageX - $(this).offset().left)/starWidth;
	if(v < 1){
		$(this).removeClass("importance2").removeClass("importance3").addClass("importance1");
		$(this).siblings()[0].value = 1;
	} else if (v < 2){
		$(this).removeClass("importance1").removeClass("importance3").addClass("importance2");
		$(this).siblings()[0].value = 2;
	} else {
		$(this).removeClass("importance2").removeClass("importance1").addClass("importance3");
		$(this).siblings()[0].value = 3;
	}
});

$('.reminder').on("click", function() {
	var ele = $(this).siblings()[0];
	ele.value = 1 - ele.value;
	if(ele.value === "1"){
		$(this).removeClass("reminderDisabled").addClass("reminderEnabled");
	} else {
		$(this).removeClass("reminderEnabled").addClass("reminderDisabled");
	}
});

// function plan(){
// 	var _html = "<div class='plan'></div>"
// }