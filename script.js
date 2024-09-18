//your JS code here. If required
document.getElementById('removebutton').addEventListener('click', () => {
	const colorSelect = document.getElementById('colorSelect');
	const selectIndex = colorSelect.selectIndex;
	if(selectIndex !== -1) {
		colorSelect.remove(selectIndex);
	}
	else {
		alert('Please Select a color to remove');
	}
});

