const form = document.querySelector('form');
const input = document.getElementById('item');
const list = document.getElementById('list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const item = input.value.trim();
    if (item !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
       
      });
      listItem.appendChild(deleteButton);
      list.appendChild(listItem);
      input.value = '';
      input.focus();
    }
  });