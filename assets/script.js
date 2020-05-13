var calendarData = [
	{
		hour: "9AM",
		event: textareaInput,
		id: "1",
	},
	{
		hour: "10AM",
		event: textareaInput,
		id: "2",
	},
	{
		hour: "11AM",
		event: textareaInput,
		id: "3",
	},
	{
		hour: "12PM",
		event: textareaInput,
		id: "4",
	},
	{
		hour: "1PM",
		event: textareaInput,
		id: "5",
	},
	{
		hour: "2PM",
		event: textareaInput,
		id: "6",
	},
	{
		hour: "3PM",
		event: textareaInput,
		id: "7",
	},
	{
		hour: "4PM",
		event: textareaInput,
		id: "8",
	},
	{
		hour: "5PM",
		event: textareaInput,
		id: "9",
	},
];

var textareaInput = "";

$(document).ready(function () {
	//getting the current day and added a new format
	$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
	//target tbody to manipulate the table rows ... and more
	var tbody = $("#calendar-content");
	//creating for each object(entry) of the array calendarData appending the rows and th,td, buttons
	calendarData.forEach((entry) => {
		tbody.append(`
        <tr style="background-color: lightgray;">
         <th style="background-color: whitesmoke; border-right: 3px solid teal; vertical-align: middle;">${entry.hour}</th>
          <td class="pl-0" style="width: 780px;padding-top: 0px;padding-bottom: 0px;padding-right: 0px;">
          <textarea  style="width: 100%; padding-top: 0px;padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 80px; border-left: 0px;" value="${entry.event}" dataId= "${entry.id}" class="textareaClass"/></td>
            <td class="pt-0 pb-0"><button data-hour="${entry.hour}" data-textareaId ="${entry.id}" class="save_btn btn btn-lg bg-info text-white btn-outline-info waves-effect" style= "height: 80px; width: 100px;"><i class="fas fa-thumbtack" aria-hidden="true"></i></button></td>
        </tr>`);
	});
	//test the save button
	$(".save_btn").on("click", function () {
		if (
			$(this).attr("data-textareaId") === $(".textareaClass").attr("dataID")
		) {
			var textareaInput = $(".textareaClass").val();
			if (textareaInput !== "") {
				$(".textareaClass").attr("disabled", "disabled");
			} else {
				textareaInput = $(".textareaClass").val();
			}
		}
	});
});
