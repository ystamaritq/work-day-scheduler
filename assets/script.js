var calendarData = [
	{
		hour: "9AM",
		event: "",
		id: 9,
	},
	{
		hour: "10AM",
		event: "",
		id: 10,
	},
	{
		hour: "11AM",
		event: "",
		id: 11,
	},
	{
		hour: "12PM",
		event: "",
		id: 12,
	},
	{
		hour: "1PM",
		event: "",
		id: 13,
	},
	{
		hour: "2PM",
		event: "",
		id: 14,
	},
	{
		hour: "3PM",
		event: "",
		id: 15,
	},
	{
		hour: "4PM",
		event: "",
		id: 16,
	},
	{
		hour: "5PM",
		event: "",
		id: 17,
	},
];

$(document).ready(function () {
	//getting the current day and added a new format
	$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
	//target tbody to manipulate the table rows ... and more
	var tbody = $("#calendar-content");

	//creating for each object(entry) of the array calendarData appending the rows and th,td, buttons
	calendarData.forEach((entry) => {
		//current hour
		var currentHour = moment().hour();

		var styleClass = "";

		// Develop the functionality to handle the color in each timeblock
		if (currentHour === entry.id) {
			styleClass = "present";
		} else if (currentHour < entry.id) {
			styleClass = "future";
		} else if (currentHour > entry.id) {
			styleClass = "past";
		}

		tbody.append(`
        <tr class="rowClass"">
			<th style="background-color: whitesmoke; border-right: 3px solid teal; vertical-align: middle;">
			 ${entry.hour}
			</th>
        	<td class="pl-0 ${styleClass}" style="width: 780px;padding-top: 0px;padding-bottom: 0px;padding-right: 0px;">
				<textarea id="${entry.id}" style="width: 100%; padding-top: 0px;padding-bottom: 0px; padding-left: 0px; padding-right: 0px; height: 80px; border-left: 0px;" value="${entry.event}" id="myText" class="textareaClass description"/>
			</td>
			<td class="pt-0 pb-0 pl-0">
				<button data-ref="${entry.id}" class="saveBtn btn btn-lg bg-info text-white btn-outline-info waves-effect" style= "height: 80px; width: 100px;"><i class="fas fa-thumbtack" aria-hidden="true"></i></button>
			</td>
		</tr>`);
	});

	//TODO: the block timeblock when is past save button event
	$(".saveBtn").on("click", saveEvent);

	function saveEvent() {
		textareaId = $(this).attr("data-ref");
		var eventText = $("#" + textareaId).val();
		alert(eventText);
	}
});
