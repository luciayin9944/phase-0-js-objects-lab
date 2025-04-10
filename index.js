//Write your code here

// Declare an object
let attendee = {}

// Add properties
attendee.attendeeId = "T001";
attendee.name = "Alice Smith";
attendee.event = "JavaScript Conference";
attendee.ticketType = "VIP";
attendee.ticketPrice = 150.00;


// Function to log the attendee's name
function logAttendeeName(attendee) {
  return console.log(attendee.name);
}

// Function to log the ticket price
function logTicketPrice(attendee) {
  return console.log(attendee.ticketPrice);
}

// Function to update ticket type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// Function to update ticket price
function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

// Function to remove the event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// Function to add a checked-in property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}









//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};