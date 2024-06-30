import $ from 'https://code.jquery.com/jquery-3.5.1.js';
import 'https://code.jquery.com/ui/1.12.1/jquery-ui.js';
import store from './store';
import { deleteTodo } from './actions';

window.newItem = function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(document.createTextNode(inputValue));

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

  let crossOutButton = $('<button></button>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", function deleteListItem() {
    li.remove();
    store.dispatch(deleteTodo(inputValue)); // Assuming inputValue is a unique identifier
    console.log(store.getState());
  });

  $('#list').sortable();
};
