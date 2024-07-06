console.log ("Api fetch");


document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('image-list');
    const loader = document.querySelector('.loader');
  
    fetchUsers();
  
    function fetchUsers() {
      loader.style.display = 'block';
  
      fetch('https://reqres.in/api/users?delay=3')
        .then(response => response.json())
        .then(data => {
          loader.style.display = 'none';

          userList.innerHTML = '';
          data.data.forEach(user => {
            const row = `
              <tr>
                <td>${user.id}</td>
                <td>${user.first_name} ${user.last_name}</td>
                <td>${user.email}</td>
                <td><img src="${user.avatar}" alt="Image" class="image"></td>
              </tr>
            `;
            userList.innerHTML += row;
          });
        })
        .catch(error => {
          loader.style.display = 'none';
          console.error('Usuario no encontrado', error);
        });
    }
  });
  