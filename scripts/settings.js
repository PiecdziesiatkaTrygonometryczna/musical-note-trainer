let submitButton = document.getElementById('start-button');
const lettersCheckbox = document.getElementById("letters");
const notesCheckbox = document.getElementById("notes");

let withOctave = false;


document.addEventListener('DOMContentLoaded', function () {
    submitButton.disabled = false; // enable the submit button by default
});

// when nointerval is checked, disable intervalinput
document.addEventListener("DOMContentLoaded", function () {
    const intervalCheckbox = document.getElementById('Interval');
    const noIntervalCheckbox = document.getElementById('noInterval');
    const intervalInput = document.getElementById('intervalInput');

    // Check interval checkbox by default
    intervalCheckbox.checked = true;

    // Disable interval input if noInterval checkbox is checked
    noIntervalCheckbox.addEventListener('change', function () {
        if (this.checked) {
            intervalCheckbox.checked = false;
            intervalInput.disabled = true;
        } else {
            intervalInput.disabled = false;
        }
    });

    // Disable noInterval checkbox if interval checkbox is checked
    intervalCheckbox.addEventListener('change', function () {
        if (this.checked) {
            noIntervalCheckbox.checked = false;
        }
    });

    // Toggle checkboxes when one is clicked
    intervalCheckbox.addEventListener('click', function () {
        noIntervalCheckbox.checked = !this.checked;
        intervalInput.disabled = !this.checked;
    });

    noIntervalCheckbox.addEventListener('click', function () {
        intervalCheckbox.checked = !this.checked;
        intervalInput.disabled = this.checked;
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const acceptAnyOctaveCheckbox = document.getElementById('acceptAnyOctave');
    const withOctaveCheckbox = document.getElementById('withOctave');
    const octaveInput = document.getElementById('octaveInput');

    acceptAnyOctaveCheckbox.addEventListener('change', function () {
        if (this.checked) {
            withOctaveCheckbox.checked = false;
            octaveInput.disabled = true;
        }
    });

    withOctaveCheckbox.addEventListener('change', function () {
        if (this.checked) {
            acceptAnyOctaveCheckbox.checked = false;
            octaveInput.disabled = false;
        }
    });
});



document.getElementById('withOctave').addEventListener('change', function () {
    document.getElementById('octaveInput').disabled = !this.checked;
    withOctave = this.checked;
});


// function to select or unselect a specific note to later display it or not
function toggleNote(note) {
    const button = document.querySelector(`button[value="${note}"]`);
    const checkbox = document.querySelector(`input[value="${note}"]`);

    button.disabled = true;

    setTimeout(function () {
        button.disabled = false;
    }, 100);

    button.classList.toggle('selected');
    checkbox.checked = !checkbox.checked;

    const checkedNotes = Array.from(document.querySelectorAll('input[name="note"]:checked')).map(input => input.value);
    console.log(checkedNotes);

    // disable the start button if there are less than 2 notes selected
    submitButton.disabled = checkedNotes.length < 2;
}

// function to select notes based on a filter condition
function selectNotes(filterCondition) {
    const notes = Array.from(document.querySelectorAll('input[name="note"]'));
    notes.forEach(note => {
        const button = document.querySelector(`button[value="${note.value}"]`);
        if (filterCondition(note.value)) {
            note.checked = true;
            button.classList.add('selected');
        } else {
            note.checked = false;
            button.classList.remove('selected');
        }
    });
    submitButton.disabled = !notes.some(note => filterCondition(note.value));
}

function selectAllSharpNotes() {
    selectNotes(value => value.endsWith('♯'));
}

function selectAllNaturalNotes() {
    selectNotes(value => !value.endsWith('♯'));
}

function selectAllNotes() {
    selectNotes(() => true);
}
function unselectAllNotes() {
    selectNotes(() => false);
}

function toggleButtons() {
    const applyAdvancedCheckbox = document.getElementById('applyAdvanced');
    const settingsContainer = document.querySelector('.settings2');
    const buttons = settingsContainer.querySelectorAll('.menu, .display-notes, .custom-checkbox input, .note-button, #octaveInput');
    buttons.forEach(button => {
        if (button.id !== 'toggleAdvancedSettings' && button.id !== 'noInterval') {
            button.disabled = applyAdvancedCheckbox.checked;
        }
    });
}

lettersCheckbox.addEventListener("change", function () {
    if (this.checked) {
        notesCheckbox.checked = false;
    } else {
        notesCheckbox.checked = true;
    }
});

notesCheckbox.addEventListener("change", function () {
    if (this.checked) {
        lettersCheckbox.checked = false;
    } else {
        lettersCheckbox.checked = true;
    }
});
