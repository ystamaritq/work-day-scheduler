# Work day Scheduler

This project hosts the source code for my Work Day Scheduler. A simple calendar application that allows the user to save events for each hour of the day.

## Installing / Getting Started

To test this project, simply clone project into a your local file system and open `index.html` in your favorite browser.

```
git clone https://github.com/ystamaritq/work-day-scheduler.git
cd work-day-scheduler
open index.html

```

---

### Initial Configuration

No additional setup required.

## Developing

Below is a summary of the key files for this project and their purpose:

- **index.html** work-day-scheduler html page
- **assets** folder that contains all files
- **assets/js/script.js** javascript files
- **assets/gif/..** animation used by the readme
- **assets/css/style.css** main site custom stylesheet

## Additional Libraries:

- **Bootstrap**
- **jQuery**
- **Moment.js**

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

### The following animation demonstrates the application functionality:

![day planner demo](./assets/gif/planner.gif)

## Features

In this work day scheduler the current day is displayed at the top of the calendar. You can create a event during the regular working hours from 9:00 AM to 5:00 PM. If the event is in the past hours the time block will be gray, if the event is in the current hour the time block will be red , or if the event is in the future the time block will be green.

## Links

[Deployed link: Try it out!](https://ystamaritq.github.io/work-day-scheduler/) </div>

[GitHub link](https://github.com/ystamaritq/work-day-scheduler) </div>

## Licensing

"The code in this project is licensed under MIT license."

---

**developed with love by **@ystamaritq\*\*\*\*
