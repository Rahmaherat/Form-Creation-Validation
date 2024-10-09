
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API endpoint
    const dataContainer = document.getElementById('api-data'); // Data container element

    try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const users = await response.json(); // Convert response to JSON

        // Clear loading message
        dataContainer.innerHTML = '';

        // Create a list to display users
        const userList = document.createElement('ul');

        // Loop through users and append their names to the list
        users.forEach(user => {
            const listItem = document.createElement('li'); // Create a list item
            listItem.textContent = user.name; // Set the user's name
            userList.appendChild(listItem); // Append to the user list
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors that occur during fetching
        dataContainer.innerHTML = ''; // Clear existing content
        dataContainer.textContent = 'Failed to load user data.'; // Error message
    }
}

// Invoke fetchUserData when the DOM content has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
