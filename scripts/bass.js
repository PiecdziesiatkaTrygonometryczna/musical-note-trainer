const toggleBassButton = document.getElementById('toggleBassButton');
const bassContainer = document.getElementById('bass-container');

toggleBassButton.addEventListener('click', function () {
    if (bassContainer.style.display === 'none') {
        fretboardContainer.style.display = 'none';
        pianoContainer.style.display = 'none';
        bassContainer.style.display = 'block';
    } else {
        bassContainer.style.display = 'none';
    }
});

// create an event listener and displays or hides specific notes for each string
function handleCheckboxChange(checkboxId, imageId) {
    const checkbox = document.getElementById(checkboxId);
    const stringImage = document.getElementById(imageId);
    checkbox.addEventListener('change', function () {
        stringImage.style.display = checkbox.checked ? "inline" : "none";
    });
}

handleCheckboxChange("stringEBassCheckboxToggle", "1st-bass-wholes");
handleCheckboxChange("stringEBassCheckboxToggle2", "1st-bass-sharps");
handleCheckboxChange("stringABassCheckboxToggle", "2nd-bass-wholes");
handleCheckboxChange("stringABassCheckboxToggle2", "2nd-bass-sharps");
handleCheckboxChange("stringDBassCheckboxToggle", "3rd-bass-wholes");
handleCheckboxChange("stringDBassCheckboxToggle2", "3rd-bass-sharps");
handleCheckboxChange("stringGBassCheckboxToggle", "4th-bass-wholes");
handleCheckboxChange("stringGBassCheckboxToggle2", "4th-bass-sharps");

function toggleVisibility(noteType, checkbox) {
    var notesImages = document.getElementsByClassName("notes-image");
    for (var i = 0; i < notesImages.length; i++) {
        if (notesImages[i].id.includes(noteType)) {
            notesImages[i].style.display = checkbox.checked ? "inline-block" : "none";
        }
    }
}





{/* <nav class="option7t">
<input type="checkbox" id="toggleWholeBassCheckbox" onchange="toggleAndCheckBass(this)" checked>
<label for="toggleWholeBassCheckbox"></label>

<input type="checkbox" id="toggleSharpBassCheckbox" onchange="toggleAndCheckBass2(this)" checked>
<label for="toggleSharpBassCheckbox"></label>
</nav> */}









function toggleAllBassCheckboxes(checkbox) {
    var otherCheckboxes = document.querySelectorAll('[id^="bass"]:not([id*="2"])');

    otherCheckboxes.forEach(function (cb) {
        if (cb !== checkbox) {
            cb.checked = checkbox.checked;
        }
    });
}

function toggleAndCheckBass(checkbox) {
    toggleVisibility('bass-wholes', checkbox);
    toggleAllBassCheckboxes(checkbox);
}

function toggleAllCheckboxes2(checkbox) {
    var otherCheckboxes = document.querySelectorAll('[id^="bass"][id*="2"]');

    otherCheckboxes.forEach(function (cb) {
        if (cb !== checkbox) {
            cb.checked = checkbox.checked;
        }
    });
}

function toggleAndCheckBass2(checkbox) {
    toggleVisibility('bass-sharps', checkbox);
    toggleAllbassCheckboxes2(checkbox);
}