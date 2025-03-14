const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
// Add click event listener to the Add Chapter button
button.addEventListener('click', function () {
    // Trim the input value to remove extra spaces
    const chapter = input.value.trim();
  
    // Check if the input is not empty
    if (chapter !== '') {
      // Create li element and populate it with input value
      const li = document.createElement('li');
      li.textContent = chapter;
  
      // Create delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
  
      // Add event listener to the delete button to remove the li
      deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus(); // Focus back on input
      });
  
      // Append delete button to li and li to the list
      li.append(deleteButton);
      list.append(li);
  
      // Clear the input field
      input.value = '';
    } else {
      alert('Please enter a chapter!');
    }
  
    // Focus back on the input field whether or not an item was created
    input.focus();
  });