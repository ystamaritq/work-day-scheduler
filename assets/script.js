var calendarData = [
	{
		hour: "9AM",
		event: "empty",
	},
	{
		hour: "10AM",
		event: "",
	},
	{
		hour: "11AM",
		event: "empty",
	},
	{
		hour: "12PM",
		event: "empty",
	},
	{
		hour: "1PM",
		event: "",
	},
	{
		hour: "2PM",
		event: "empty",
	},
	{
		hour: "3PM",
		event: "empty",
	},
	{
		hour: "4PM",
		event: "empty",
	},
	{
		hour: "5PM",
		event: "empty",
	},
];

$(document).ready(function () {
	//getting the current day and added a new format
	$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
	//target tbody to manipulate the table rows ... and more
	var tbody = $("#calendar-content");
	//creating for each object(entry) of the array calendarData appending the rows and th,td, buttons
	calendarData.forEach((entry) => {
		tbody.append(`<tr style="background-color: lightgray;"><th style="background-color: whitesmoke;
  border-right: 3px solid teal; vertical-align: middle;">${entry.hour}</th><td class="pl-0" style="width: 780px;padding-top: 0px;padding-bottom: 0px;padding-right: 0px;"><textarea  style="width: 100%; padding-top: 0px;
  padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 80px; border-left: 0px;" value="${entry.event}"/></td><td class="pt-0 pb-0">
        <button data-hour="${entry.hour}" class="save_btn btn btn-lg bg-info text-white btn-outline-info waves-effect" style= "height: 80px;
  width: 100px;"><i class="fas fa-thumbtack"
      aria-hidden="true"></i></button></td></tr>`);
	});

	$(".save_btn").on("click", function () {
		alert($(this).attr("data-hour"));
	});
});
