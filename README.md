# Delivery Exception Management Dashboard

A simple, static web application for logging, tracking, and managing delivery exceptions in a corporate environment.
Built with HTML, CSS, and JavaScript, it allows users to report issues, view them in a table, filter by type/status, and perform actions like resolving or deleting entries.
No backend or frameworks required – runs directly in the browser.

## Features
- **Form Submission**: Report delivery exceptions with required fields (Delivery ID, Customer Name, Issue Type, Priority) and optional notes.
- **Dynamic Table**: Displays exceptions with columns for ID, Name, Type, Priority, Notes, Status, and Actions.
- **Filtering**: Filter exceptions by Issue Type and Status without losing data.
- **Actions**: Resolve issues (changes status and visually indicates) or delete with confirmation.
- **Counts and Highlights**: Real-time counts of open/resolved issues; high-priority rows highlighted in red.
- **Responsive UI**: Clean, professional design with neutral colors, suitable for desktop use.
- **Validation**: Ensures required fields are filled before submission.

## Technologies Used
- **HTML**: Structure and form elements.
- **CSS**: Styling for layout, colors, and responsiveness.
- **JavaScript**: DOM manipulation for interactivity (no libraries or frameworks).

## How to Run Locally
1. Clone the repository: `git clone https://github.com/mohdabid4333-dotcom/delivery-exception-dashboard.git`.
2. Navigate to the folder: `cd delivery-exception-dashboard`.
3. Open `index.html` in a web browser (e.g., double-click the file or use a local server like `python -m http.server`).
4. Start using the dashboard: Submit forms, filter, and manage exceptions.

## Live Demo
View the live version hosted on GitHub Pages: [https://mohdabid4333-dotcom.github.io/delivery-exception-dashboard](https://mohdabid4333-dotcom.github.io/delivery-exception-dashboard).

## Screenshots
<img width="1918" height="1022" alt="Screenshot 2026-02-13 204255" src="https://github.com/user-attachments/assets/24833ea8-50ce-4cea-b554-0e5ae3e445c7" />
<img width="1918" height="1020" alt="Screenshot 2026-02-13 204431" src="https://github.com/user-attachments/assets/53d0be41-6892-4734-a4d7-d7c20aac5f64" />

## Testing
- Submit sample exceptions using the form (e.g., Delivery ID: "DEL001", Customer Name: "John Doe", Issue Type: "Address Not Found", Priority: "High").
- Test filters, actions, and counts. Refer to the project's testing guide for examples.
- Ensure it works in modern browsers (Chrome, Firefox, Edge).

## Project Structure
HTML File: [index.html](index.html)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delivery Exception Management Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Delivery Exception Management Dashboard</h1>
    
    <div id="form-container">
        <h2>Report a Delivery Exception</h2>
        <form id="exception-form">
            <label for="delivery-id">Delivery ID (required):</label>
            <input type="text" id="delivery-id" required>
            
            <label for="customer-name">Customer Name (required):</label>
            <input type="text" id="customer-name" required>
            
            <label for="issue-type">Issue Type (required):</label>
            <select id="issue-type" required>
                <option value="">Select Issue Type</option>
                <option value="Address Not Found">Address Not Found</option>
                <option value="Customer Not Available">Customer Not Available</option>
                <option value="Payment Issue">Payment Issue</option>
                <option value="Package Damaged">Package Damaged</option>
            </select>
            
            <label>Priority (required):</label>
            <div>
                <input type="radio" id="low" name="priority" value="Low" required>
                <label for="low">Low</label>
                <input type="radio" id="medium" name="priority" value="Medium" required>
                <label for="medium">Medium</label>
                <input type="radio" id="high" name="priority" value="High" required>
                <label for="high">High</label>
            </div>
            
            <label for="notes">Notes (optional):</label>
            <textarea id="notes"></textarea>
            
            <button type="submit">Submit</button>
        </form>
    </div>
    
    <div id="filters">
        <label>Filter by Issue Type:
            <select id="filter-type">
                <option value="">All</option>
                <option value="Address Not Found">Address Not Found</option>
                <option value="Customer Not Available">Customer Not Available</option>
                <option value="Payment Issue">Payment Issue</option>
                <option value="Package Damaged">Package Damaged</option>
            </select>
        </label>
        <label>Filter by Status:
            <select id="filter-status">
                <option value="">All</option>
                <option value="Open">Open</option>
                <option value="Resolved">Resolved</option>
            </select>
        </label>
    </div>
    
    <div id="counts">
        <p>Open Issues: <span id="open-count">0</span></p>
        <p>Resolved Issues: <span id="resolved-count">0</span></p>
    </div>
    
    <table id="exceptions-table">
        <thead>
            <tr>
                <th>Delivery ID</th>
                <th>Customer Name</th>
                <th>Issue Type</th>
                <th>Priority</th>
                <th>Notes</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="table-body">
        </tbody>
    </table>
    
    <script src="script.js"></script>
</body>
</html>

CSS File: [styles.css](styles.css)

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 20px;
    line-height: 1.6;
}

h1, h2 {
    color: #0056b3;
}

#form-container, #filters, #counts {
    margin-bottom: 20px;
    padding: 15px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
    font-weight: bold;
}

input, select, textarea {
    margin-top: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    margin-top: 15px;
    padding: 10px;
    background-color: #0056b3;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

button:hover {
    background-color: #003d82;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}

.resolved {
    background-color: #d4edda;
    opacity: 0.7;
}

.high-priority {
    background-color: #f8d7da;
}

.action-btn {
    padding: 5px 10px;
    margin: 2px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

.resolve-btn {
    background-color: #28a745;
    color: white;
}

.resolve-btn:hover {
    background-color: #218838;
}

.delete-btn {
    background-color: #dc3545;
    color: white;
}

.delete-btn:hover {
    background-color: #c82333;
}

.disabled {
    background-color: #6c757d;
    cursor: not-allowed;
}

JavaScript File: [script.js](script.js)

const exceptions = [];
const form = document.getElementById('exception-form');
const tableBody = document.getElementById('table-body');
const filterType = document.getElementById('filter-type');
const filterStatus = document.getElementById('filter-status');
const openCount = document.getElementById('open-count');
const resolvedCount = document.getElementById('resolved-count');

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const deliveryId = document.getElementById('delivery-id').value.trim();
    const customerName = document.getElementById('customer-name').value.trim();
    const issueType = document.getElementById('issue-type').value;
    const priority = document.querySelector('input[name="priority"]:checked')?.value;
    const notes = document.getElementById('notes').value.trim();
    
    if (!deliveryId || !customerName || !issueType || !priority) {
        alert('Please fill in all required fields.');
        return;
    }
    
    const exception = {
        id: deliveryId,
        name: customerName,
        type: issueType,
        priority: priority,
        status: 'Open',
        notes: notes
    };
    
    exceptions.push(exception);
    addRowToTable(exception);
    updateCounts();
    form.reset();
});

// Add row to table
function addRowToTable(exception) {
    const row = document.createElement('tr');
    row.setAttribute('data-id', exception.id);
    row.setAttribute('data-type', exception.type);
    row.setAttribute('data-status', exception.status);
    if (exception.priority === 'High') {
        row.classList.add('high-priority');
    }
    
    row.innerHTML = `
        <td>${exception.id}</td>
        <td>${exception.name}</td>
        <td>${exception.type}</td>
        <td>${exception.priority}</td>
        <td>${exception.notes || '-'}</td>
        <td>${exception.status}</td>
        <td>
            <button class="action-btn resolve-btn">Resolve</button>
            <button class="action-btn delete-btn">Delete</button>
        </td>
    `;
    
    tableBody.appendChild(row);
}

// Update counts
function updateCounts() {
    const open = exceptions.filter(ex => ex.status === 'Open').length;
    const resolved = exceptions.filter(ex => ex.status === 'Resolved').length;
    openCount.textContent = open;
    resolvedCount.textContent = resolved;
}

// Filters
filterType.addEventListener('change', applyFilters);
filterStatus.addEventListener('change', applyFilters);

function applyFilters() {
    const typeFilter = filterType.value;
    const statusFilter = filterStatus.value;
    
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const type = row.getAttribute('data-type');
        const status = row.getAttribute('data-status');
        
        const typeMatch = !typeFilter || type === typeFilter;
        const statusMatch = !statusFilter || status === statusFilter;
        
        if (typeMatch && statusMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Event delegation for actions
tableBody.addEventListener('click', function(e) {
    if (e.target.classList.contains('resolve-btn')) {
        const row = e.target.closest('tr');
        const id = row.getAttribute('data-id');
        const exception = exceptions.find(ex => ex.id === id);
        if (exception && exception.status === 'Open') {
            exception.status = 'Resolved';
            row.setAttribute('data-status', 'Resolved');
            row.classList.add('resolved');
            e.target.classList.add('disabled');
            e.target.disabled = true;
            updateCounts();
            applyFilters(); // Re-apply filters in case status filter is active
        }
    } else if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this exception?')) {
            const row = e.target.closest('tr');
            const id = row.getAttribute('data-id');
            const index = exceptions.findIndex(ex => ex.id === id);
            if (index > -1) {
                exceptions.splice(index, 1);
                row.remove();
                updateCounts();
            }
        }
    }
});


## Contributing
Feel free to fork the repo, make improvements, and submit a pull request. Suggestions welcome!

## License
This project is open-source under the MIT License. See [LICENSE](LICENSE) for details.

## Contact
Created by [Mehak Abid](https://github.com/mohdabid4333-dotcom). For questions, open an issue on GitHub.
