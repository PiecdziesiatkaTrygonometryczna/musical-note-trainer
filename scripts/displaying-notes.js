const INVALID_INTERVAL_MESSAGE = "Podaj inerwał od 0,3 do 10";
const INVALID_NUMBER_MESSAGE = "Podaj liczbę";
let displayNotesInterval;
let withoutInterval = false;
let withInterval = false;
const CURRENT_NOTE_CLASS = 'current-note';
const NEXT_NOTES_CLASS = 'next-notes';
const PREVIOUS_NOTES_CLASS = 'previous-notes';
let applyAdvancedCheckbox = document.getElementById('applyAdvanced');


// if intervalinput is disabled, start displaying without interval
// else start the program with user interval value
function startProgram() {
    const intervalInput = document.getElementById('intervalInput');
    if (intervalInput.disabled) {
        startDisplayingNotesWithoutInterval();
    } else {
        const interval = parseFloat(intervalInput.value);
        if (!isNaN(interval)) {
            if (validateInterval(interval)) {
                startDisplayingNotes(interval);
            } else {
                alert(INVALID_INTERVAL_MESSAGE);
            }
        } else {
            alert(INVALID_NUMBER_MESSAGE);
        }
    }

}

function validateInterval(interval) {
    return interval >= 0.3 && interval <= 10.0;
}

// generate a random note within the selected checkboxes
function generateRandomNote() {
    let selectedNotes;
    if (applyAdvancedCheckbox.checked) {
        selectedNotes = advancedSelectedNotes;
        withOctave = true;
    } else {
        selectedNotes = Array.from(document.querySelectorAll('input[name="note"]:checked'), checkbox => checkbox.value);
        withOctave = false;
    }
    const currentOctaveChosen = document.querySelector('#octaveInput').value;
    const randomIndex = Math.floor(Math.random() * selectedNotes.length);
    if (document.getElementById("withOctave").checked && !document.getElementById("applyAdvanced").checked) {;
        return selectedNotes[randomIndex] + currentOctaveChosen;
    } else {
        return selectedNotes[randomIndex];
    }
}



// fill the next notes array with 3 random notes
function initializeNextNotesArray() {
    const nextNotes = Array.from({ length: 3 }, generateRandomNote);
    setNextNotesNav(nextNotes.join(" ")); // and also display it in the next-notes nav
    return nextNotes;
}

function startDisplaying() {
    stopDisplayingNotes(); // if any notes are being displayed, stop it
    setCurrentNoteNav("");
    setPreviousNotesNav("");
    initializeNextNotesArray(); // generate initial set of notes
}

function startDisplayingNotesWithoutInterval() {
    startDisplaying();
    withInterval = false;
    withoutInterval = true;
    setTimeout(() => updateNotesDisplay(), 1000);
}

function startDisplayingNotes(interval) {
    startDisplaying();
    withInterval = true;
    withoutInterval = false;
    displayNotesInterval = setInterval(() => updateNotesDisplay(), interval * 1000);
}

// helper function to display next note, and move every note 1 place left
function updateNotesDisplay() {
    const nextNotes = getNextNotes();
    const currentNote = getCurrentNote();
    if (currentNote) { addNoteToPreviousNotes(currentNote) } // add current note to previous notes array if it exists
    setCurrentNoteNav(nextNotes.shift()); // remove the first note from the next notes array and display it as the current note
    revertColorOfCurrentNote();
    nextNotes.push(generateRandomNote()); // add random note as last index of next notes
    setNextNotesNav(nextNotes.join(" ")); // update next notes nav
    console.log(nextNotes);
}

// handle adding note to previous notes array
function addNoteToPreviousNotes(note) {
    const previousNotes = getPreviousNotes();
    if (previousNotes.length >= 5) { // prevent previous notes from storing more than 5 notes
        previousNotes.shift();
    }
    previousNotes.push(note);
    setPreviousNotesNav(previousNotes.join(" "));

}

function stopDisplayingNotes() {
    withoutInterval = false;
    withInterval = false;
    clearInterval(displayNotesInterval);
}

const getCurrentNote = () => document.querySelector(`.${CURRENT_NOTE_CLASS}`).innerText;

function getNextNotes() {
    const nextNotesNav = document.querySelector(`.${NEXT_NOTES_CLASS}`);
    return nextNotesNav.textContent.trim().split(" ");
}

function getPreviousNotes() {
    const previousNotesNav = document.querySelector(`.${PREVIOUS_NOTES_CLASS}`);
    return previousNotesNav.textContent.trim().split(" ");
}


function setCurrentNoteNav(note) {
    const currentNoteNav = document.querySelector(`.${CURRENT_NOTE_CLASS}`);
    const noteHtml = note.replace('♯', '<span class="sharp-symbol">♯</span>');
    currentNoteNav.innerHTML = `<nav>${noteHtml}</nav>`;
}

function setNextNotesNav(string) {
    const nextNotesNav = document.querySelector(`.${NEXT_NOTES_CLASS}`);
    const noteHtml = string.replaceAll('♯', '<span class="sharp-symbol">♯</span>');
    nextNotesNav.innerHTML = `<nav>${noteHtml}</nav>`;
}

function setPreviousNotesNav(string) {
    const previousNotesNav = document.querySelector(`.${PREVIOUS_NOTES_CLASS}`);
    const noteHtml = string.replaceAll('♯', '<span class="sharp-symbol">♯</span>');
    previousNotesNav.innerHTML = `<nav>${noteHtml}</nav>`;
}

function revertColorOfCurrentNote() {
    const currentNoteNav = document.querySelector(`.${CURRENT_NOTE_CLASS}`);
    currentNoteNav.style.color = '';
}