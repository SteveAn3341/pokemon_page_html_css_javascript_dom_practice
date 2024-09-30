const destinations = [
    { value: 'newyork', label: 'New York' },
    { value: 'japan', label: 'Japan' },
    { value: 'hongkong', label: 'Hong Kong' },
    { value: 'shanghai', label: 'Shanghai' },
    { value: 'paris', label: 'Paris' },
    { value: 'greece', label: 'Greece' }
];

// Populate the dropdown using a for loop
const dropdown = document.getElementById('destinationDropdown');
for (let i = 0; i < destinations.length; i++) {
    const option = document.createElement('option');
    option.value = destinations[i].value;
    option.textContent = destinations[i].label;
    dropdown.appendChild(option);
}

// Add event listener for the dropdown
dropdown.addEventListener('change', function() {
    const selectedValue = this.value; // Get the selected value from the dropdown

    // Check if a valid destination is selected
    if (selectedValue) {
        alert('Good choice! This is the best place to go!');
    }
});


document.getElementById('bookButton').addEventListener('click', function() {
    alert('Booking feature coming soon!');
});