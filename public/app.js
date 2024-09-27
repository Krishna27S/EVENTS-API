// API URL
const API_URL = 'http://localhost:5000/api/events';

// Fetch all events on page load
document.addEventListener('DOMContentLoaded', fetchEvents);

// Form submission for creating an event
document.getElementById('event-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value;

    const event = { name, location, time, description };

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event),
        });

        if (res.ok) {
            fetchEvents(); // Reload the events
            document.getElementById('event-form').reset(); // Clear form
        } else {
            console.error('Failed to create event');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Fetch and display events
async function fetchEvents() {
    try {
        const res = await fetch(API_URL);
        const events = await res.json();
        const tableBody = document.querySelector('#event-table tbody');
        tableBody.innerHTML = '';

        events.forEach((event) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${event.name}</td>
                <td>${event.location}</td>
                <td>${new Date(event.time).toLocaleString()}</td>
                <td>${event.description || ''}</td>
                <td>
                    <button class="edit" onclick="editEvent('${event._id}')">Edit</button>
                    <button class="delete" onclick="deleteEvent('${event._id}')">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

// Delete an event
async function deleteEvent(id) {
    try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

        if (res.ok) {
            fetchEvents();
        } else {
            console.error('Failed to delete event');
        }
    } catch (error) {
        console.error('Error deleting event:', error);
    }
}

// Edit an event (Placeholder for now)
function editEvent(id) {
    alert(`Edit functionality not yet implemented for event ${id}`);
}
