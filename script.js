//your JS code here. If required
document.getElementById('removeButton').addEventListener('click', () => {
	const colorSelect = document.getElementById('colorSelect');
	const selectedIndex = colorSelect.selectedIndex;
	if(selectedIndex !== -1) {
		colorSelect.remove(selectedIndex);
	}
	else {
		alert('Please Select a color to remove');
	}
});

