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