// Toggle styles when clicking on to do list elements
$("ul").on("click", "li", function() {
    $(this).toggleClass("checked-item");
});

// Remove list element when clicking on delete button
$("ul").on("click", "li span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Register a new list element when pressing enter (javascript keycode = 13) on the input field
$("#input-field").keypress(function(event) {
   if (event.which === 13) {
       var newTask = $(this).val();
       // TODO Check if task is already in the list
       $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + newTask + "</li>");
       $(this).val("");
   }
});

// Toggle the input when pressing the plus icon
$("#plus-icon").click(function() {
   $("#input-field").fadeToggle();
});
