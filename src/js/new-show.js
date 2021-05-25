// add top rows
$('#add_show')
	.append("<div class='row'><h1>Add Show</h1></div>")
	.append("<div class='row'><h5 id='team_name'></h5></div>")
	.append("<div class='row' id='add_form'></div>");

// add a form to the add_form row
$('#add_form').append("<form></form>");
// create two columns in the form
$('#add_form form')
	.append("<div class='row' id='header'></div>")
	.append("<div class='row inputs'></div>")
	.append("<div class='row'><p id='error_message'></p></div>")
	.append("<div class='row button'></div>");

$('#add_form .inputs')
	.append("<div class='col-md-9 boxes'></div>")
	.append("<div class='col-md-3 details'></div>");

// add rows for input boxes
$('#add_form .boxes')
	.append("<div class='row' id='form0'></div>")
	.append("<div class='row' id='form1'></div>")
	.append("<div class='row' id='form2'></div>")
	.append("<div class='row' id='form3'></div>")
	.append("<div class='row' id='form4'></div>")

// add headers
$('#header')
	.append('<div class="col-md-3 name"></div>')
	.append('<div class="col-md-3 show"></div>')
	.append('<div class="col-md-3 tech"></div>')
	.append('<div class="col-md-3 det"></div>');

$('#form1')
	.append('<div class="col-md-4 name"></div>')
	.append('<div class="col-md-4 show"></div>')
	.append('<div class="col-md-4 tech"></div>');
$('#form2')
	.append('<div class="col-md-4 name"></div>')
	.append('<div class="col-md-4 show"></div>')
	.append('<div class="col-md-4 tech"></div>');
$('#form3')
	.append('<div class="col-md-4 name"></div>')
	.append('<div class="col-md-4 show"></div>')
	.append('<div class="col-md-4 tech"></div>');
$('#form4')
	.append('<div class="col-md-4 name"></div>')
	.append('<div class="col-md-4 show"></div>')
	.append('<div class="col-md-4 tech"></div>');

// add column headers
$('#header .name').append("<h5>Info:</h5>");
$('#header .show').append("<h5>Show:</h5>");
$('#header .tech').append("<h5>Tech:</h5>");

// add contact column
$('#form1 .name')
	.append('<label for="show_name" class="form-label">Show Name:</label>')
	.append('<input type="text" name="show_name" value="" id="show_name" class="form-control">');
$('#form2 .name')
	.append('<label for="contact_name" class="form-label">Contact Name:</label>')
	.append('<input type="text" name="contact_name" value="" id="contact_name" class="form-control">');
$('#form3 .name')
	.append('<label for="contact_name" class="form-label">Email:</label>')
	.append('<input type="text" name="contact_email" value="" id="contact_email" class="form-control">');
$('#form4 .name')
	.append('<label for="contact_phone" class="form-label">Phone:</label>')
	.append('<input type="tel" id="contact_phone" name="contact_phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control">');

// add Tech column
$('#form1 .tech')
	.append('<label for="tech_start" class="form-label">Start Date:</label>')
	.append('<input type="date" id="tech_start" name="tech_start" value="" class="form-control">');
$('#form2 .tech')
	.append('<label for="tech_end" class="form-label">End Date:</label>')
	.append('<input type="date" id="tech_end" name="tech_end" value="" class="form-control">');
$('#form3 .tech')
	.append('<label for="tech_start_time" class="form-label">Start Time:</label>')
	.append('<input type="time" id="tech_start_time" name="tech_start_time" min="09:00" max="24:00" class="form-control">');
$('#form4 .tech')
	.append('<label for="tech_end_time" class="form-label">End Time:</label>')
	.append('<input type="time" id="tech_end_time" name="tech_end_time" min="09:00" max="24:00" class="form-control">');

// add tech column
$('#form1 .show')
	.append('<label for="show_start" class="form-label">Start Date:</label>')
	.append('<input type="date" id="show_start" name="show_start" value="" class="form-control">');
$('#form2 .show')
	.append('<label for="show_end" class="form-label">End Date:</label>')
	.append('<input type="date" id="show_end" name="show_end" value="" class="form-control">');
$('#form3 .show')
	.append('<label for="show_start_time" class="form-label">Start Time:</label>')
	.append('<input type="time" id="show_start_time" name="show_start_time" min="09:00" max="24:00" class="form-control">');
$('#form4 .show')
	.append('<label for="show_end_time" class="form-label">End Time:</label>')
	.append('<input type="time" id="show_end_time" name="show_end_time" min="09:00" max="24:00" class="form-control">');


$('#add_form .details')
	.append('<label for="show_detail" class="form-label">Details:</label>')
	.append('<textarea type="text" id="show_detail" name="show_detail" class="form-control" style="height: 85%; text-align: left">');

$('#add_form .button').append('<div class="col-12 text-center button_col"></div>');

$('#add_form .button_col').append('<input type="button" class="btn btn-dark" value="Create Show" onclick="addShow()" style="width: 20%;">')

function addShow(){
	// TODO: Link front end to back end
	// Display error message in "#error_message"
}
function onLoad() {
	// TODO: get team name and display in "#team_name"
}
onLoad();


