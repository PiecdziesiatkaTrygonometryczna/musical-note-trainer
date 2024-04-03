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

  for (let octave = 1; octave <= numOctaves; octave++) {   // generate a div for each octave
    let octaveDiv = document.createElement("div");
    octaveDiv.classList.add("octave-container");

    let label = document.createElement("div");
    label.textContent = "Oktawa " + octave;
    label.classList.add("octave-label");
    octaveDiv.appendChild(label);

    let buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("note-buttons");

    const notes = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];     // and buttons for each note in the octave  
    notes.forEach(note => {
      let button = document.createElement("button");
      button.textContent = note + octave;
      button.value = note + octave;
      button.onclick = function() {
        toggleNoteSelection(this.value);
      };
      buttonsDiv.appendChild(button);
    });
    octaveDiv.appendChild(buttonsDiv);
    noteButtonsContainer.appendChild(octaveDiv);
  }
}

// this function is called every time a note button is pressed
function toggleNoteSelection(note) {
  let button = document.querySelector(`button[value="${note}"]`);
  button.classList.toggle("selected");
  // TODO
}

// initailly generate note buttons 
populateNoteButtons();



// Function to select all notes
function advancedSelectAllNotes() {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer button");
  noteButtons.forEach(button => {
    button.classList.add("selected");
  });
}

function advancedSelectWholeNotes() {
  let noteButtons = document.querySelectorAll("#noteButtonsContainer button");
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
  let noteButtons = document.querySelectorAll("#noteButtonsContainer button");
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
  let noteButtons = document.querySelectorAll("#noteButtonsContainer button");
  noteButtons.forEach(button => {
    button.classList.remove("selected");
  });
}
