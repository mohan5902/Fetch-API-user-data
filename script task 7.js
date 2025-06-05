
async function fetchUserData() {
  const userContainer = document.getElementById('userContainer');
  userContainer.innerHTML = ""; // Clear old data

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(HTTP error! Status: ${response.status});
    }

    const users = await response.json();

    // Loop through users and display data
    users.forEach(user => {
      const card = document.createElement('div');
      card.className = 'user-card';
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userContainer.appendChild(card);
    });

  } catch (error) {
    userContainer.innerHTML = <p style="color:red;">Error: ${error.message}</p>;
  }
}

