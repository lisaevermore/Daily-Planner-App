# Daily-Planner-App

This is a simple calendar application that allows the user to save events for each hour of the day. It uses the Moment.js library for working with date and time and jQuery for dynamic updates to HTML and CSS.
link to the planner: https://lisaevermore.github.io/Daily-Planner-App/

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

### Features
* Displays the current day at the top of the calendar upon opening.
* Presents timeblocks for standard business hours.
* Color-codes each timeblock based on past, present, and future.
* Allows a user to enter an event by clicking a timeblock.
* Saves the event in local storage when the save button is clicked in that timeblock.
* Persists events between page refreshes.

### Requirements
* A web browser with JavaScript support.
* The Moment.js library.
* The jQuery library.

### Screenshot
![screencapture-127-0-0-1-5501-index-html-2023-02-02-00_49_55](https://user-images.githubusercontent.com/70776430/216204681-5308afe7-56d8-478f-80ac-5bf6cd2c6e80.png)

### Technical Details
The application uses JavaScript for its functionality and jQuery for dynamic updates to HTML and CSS. The Moment.js library is used for working with date and time. All events are saved in local storage, allowing them to persist between page refreshes.
