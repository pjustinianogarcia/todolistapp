
function newItem() {
    let inputValue = $('#input').val().trim();
    if (inputValue === '') {
        alert("You must write something!");
        return;
    }
    
    // Create a new list item with the input value
    let li = $("<li></li>").text(inputValue);
    
    // Append a cross out button to the list item
    let crossOutButton = $('<button>X</button>');
    li.append(crossOutButton);
    
    // Attach event listener to the cross out button
    crossOutButton.on("click", function() {
        li.remove(); // Remove the list item when the button is clicked
    });
    
    // Append the new list item to the list
    $('#list').append(li);
    
    // Clear the input field
    $('#input').val('');
}
