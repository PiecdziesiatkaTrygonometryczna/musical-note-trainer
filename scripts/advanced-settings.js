function openAdvancedSettingsWindow() {
  document.getElementById("advancedSettingsWindow").style.display = "block";
}

function closeAdvancedSettingsWindow() {
  document.getElementById("advancedSettingsWindow").style.display = "none";
}


// function to populate note buttons for all octaves
function populateNoteButtons() {
  let noteButtonsContainer = document.getElementById("noteButtonsContainer");
  noteButtonsContainer.innerHTML = "";
  const numOctaves = 8;

  for (let octave = 1; octave <= numOctaves; octave++) {
    let octaveDiv = document.createElement("div");
    octaveDiv.classList.add("octave-container");

    let label = document.createElement("div");
    label.textContent = "Oktawa " + octave;
    label.classList.add("octave-label");
    octaveDiv.appendChild(label);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("note-buttons");

    const notes = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
    notes.forEach(note => {
      let button = document.createElement("button");
      button.textContent = note + octave;
      button.value = note + octave;
      button.onclick = function () {
        toggleNoteSelection(this.value);
      };
      button.classList.add("advanced-note-button");
      buttonsDiv.appendChild(button);
    });

    // need a little space between note buttons and its selectors
    let spaceDiv = document.createElement("div");
    spaceDiv.classList.add("space");
    buttonsDiv.appendChild(spaceDiv);

    // button to select all notes in spesific octave
    let selectOctaveButton = document.createElement("button");
    selectOctaveButton.textContent = "Wszystkie";
    selectOctaveButton.onclick = function () {
      selectOctaveNotes(octave);
    };
    buttonsDiv.appendChild(selectOctaveButton);


    // button to select whole notes (without sharps) in specific octave
    let selectWholeNotesButton = document.createElement("button");
    selectWholeNotesButton.textContent = "Całe";
    selectWholeNotesButton.onclick = function () {
      selectWholeNotesInOctave(octave);
    };
    buttonsDiv.appendChild(selectWholeNotesButton);


    // button to select sharp notes in specific octave
    let selectSharpNotesButton = document.createElement("button");
    selectSharpNotesButton.textContent = "Krzyżyki";
    selectSharpNotesButton.onclick = function () {
      selectSharpNotesInOctave(octave);
    };
    buttonsDiv.appendChild(selectSharpNotesButton);

    // button to unselect all notes in specific octave
    let unselectAllButton = document.createElement("button");
    unselectAllButton.textContent = "Wyczyść";
    unselectAllButton.onclick = function () {
      unselectOctaveNotes(octave);
    };
    buttonsDiv.appendChild(unselectAllButton);
    octaveDiv.appendChild(buttonsDiv);

    noteButtonsContainer.appendChild(octaveDiv);
  }
}


// and corresponding functions to handle selection within a specific octabe 
function selectOctaveNotes(octave) {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer button");
  noteButtons.forEach(button => {
    if (button.textContent.endsWith(octave)) {
      button.classList.add("selected");
    }
  });
}

function unselectOctaveNotes(octave) {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer button");
  noteButtons.forEach(button => {
    if (button.textContent.endsWith(octave)) {
      button.classList.remove("selected");
    }
  });
}

function selectWholeNotesInOctave(octave) {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer button");
  noteButtons.forEach(button => {
    if (button.textContent.endsWith(octave)) {
      if (!button.textContent.includes('♯')) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    }
  });
}

function selectSharpNotesInOctave(octave) {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer button");
  noteButtons.forEach(button => {
    if (button.textContent.endsWith(octave)) {
      if (button.textContent.includes('♯')) {
        button.classList.add("selected");
      } else {
        button.classList.remove("selected");
      }
    }
  });
}




// this function is called every time a note button is pressed
function toggleNoteSelection(note) {
  let button = document.querySelector(`button[value="${note}"]`);
  button.classList.toggle("selected");
  // TODO
}

// initailly generate note buttons 
populateNoteButtons();



// function to select all notes from all octaves
function advancedSelectAllNotes() {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
  noteButtons.forEach(button => {
    button.classList.add("selected");
  });
}



function advancedSelectWholeNotes() {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
  noteButtons.forEach(button => {
    let note = button.textContent;
    if (!note.includes('♯')) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}


function advancedSelectSharpNotes() {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
  noteButtons.forEach(button => {
    let note = button.textContent;
    if (note.includes('♯')) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
}

function advancedUnselectAllNotes() {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
  noteButtons.forEach(button => {
    button.classList.remove("selected");
  });
}
