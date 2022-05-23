window.onbeforeunload = function() {
	return Swal.fire({
		title: "Save changes?",
		text: "You have unsaved changes. Do you want to save them?",
		icon: "warning",
		showDenyButton: true,
		showCancelButton: true,
		confirmButtonText: "Save (WIP)",
		denyButtonText: "Don't save",
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire("Saved!", "Your changes have been saved.", "success");
			setTimeout(function() {
				window.close();
			}, 750)
		} else if (result.isDenied) {
			Swal.fire("", "Your changes have not been saved.", "warning");
			setTimeout(function() {
				window.close();
			}, 750)
		}
	});
}

function changeSection(originalSection, newSection) {
	var sectionPrefix = "section";
	var previousSection = document.getElementById(sectionPrefix.concat(originalSection));
	var newSection = document.getElementById(sectionPrefix.concat(newSection));
	previousSection.setAttribute("style", "display: none;");
	newSection.setAttribute("style", "display: block;");
}

function finishForm() {
	Swal.fire("Thank you!", "Thank you for your feedback!", "success");
}

function confirmSave(e) {
	
	Swal.fire({
		title: "Save changes?",
		text: "You have unsaved changes. Do you want to save them?",
		type: "warning",
		showCancelButton: false,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'OK'
	}).then((result) => {
		if (result.value) {
			window.close();
  }
})
}