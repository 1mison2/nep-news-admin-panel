document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
    const userForm = document.getElementById('user-form');

    // Fetch users from the server
    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3000/api/users');
        const users = await response.json();
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email})`;
            userList.appendChild(li);
        });
    };

    // Add a new user
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        userForm.reset();
        fetchUsers();
    });

    fetchUsers();
});