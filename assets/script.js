var calendarData = [
	{
		hour: "9AM",
		event: textareaInput,
		id: 9,
	},
	{
		hour: "10AM",
		event: textareaInput,
		id: 10,
	},
	{
		hour: "11AM",
		event: textareaInput,
		id: 11,
	},
	{
		hour: "12PM",
		event: textareaInput,
		id: 12,
	},
	{
		hour: "1PM",
		event: textareaInput,
		id: 13,
	},
	{
		hour: "2PM",
		event: textareaInput,
		id: 14,
	},
	{
		hour: "3PM",
		event: textareaInput,
		id: 15,
	},
	{
		hour: "4PM",
		event: textareaInput,
		id: 16,
	},
	{
		hour: "5PM",
		event: textareaInput,
		id: 17,
	},
	{
		hour: "10PM",
		event: textareaInput,
		id: 22,
	},
	{
		hour: "11PM",
		event: textareaInput,
		id: 23,
	},
];

var textareaInput = "";

$(document).ready(function () {
	//getting the current day and added a new format
	$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
	//target tbody to manipulate the table rows ... and more
	var tbody = $("#calendar-content");

	$(".rowClass .present").css("background-color", "red");
	$(".rowClass .past").css("background-color", "grey");
	$(".rowClass .future").css("background-color", "green");

	//creating for each object(entry) of the array calendarData appending the rows and th,td, buttons
	calendarData.forEach((entry) => {
		var styleClass = "normal";
		var currentHour = moment().hour();

		if (currentHour === entry.id) {
			styleClass = "present";
		} else if (currentHour < entry.id) {
			styleClass = "future";
		} else if (currentHour > entry.id) {
			styleClass = "past";
		}

		tbody.append(`
        <tr class="rowClass" data-hour="${entry.hour}">
         <th style="background-color: whitesmoke; border-right: 3px solid teal; vertical-align: middle;">${entry.hour}</th>
          <td class="pl-0 ${styleClass}" style="width: 780px;padding-top: 0px;padding-bottom: 0px;padding-right: 0px;">
          <textarea style="width: 100%; padding-top: 0px;padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 80px; border-left: 0px;" value="${entry.event}" dataId= "${entry.id}" class="textareaClass"/></td>
            <td class="pt-0 pb-0 pl-0"><button data-hour="${entry.hour}" data-textareaId ="${entry.id}" class="save_btn btn btn-lg bg-info text-white btn-outline-info waves-effect" style= "height: 80px; width: 100px;"><i class="fas fa-thumbtack" aria-hidden="true"></i></button></td>
		</tr>`);
	});

	/**
	 * Develop the functionality to handle the color in each timeblock
	 * to indicate whether it is in the past, present, or future.
	 */

	//TODO: the block timeblock when is past save button event
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
