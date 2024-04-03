function openAdvancedSettingsWindow() {
  document.getElementById("advancedSettingsWindow").style.display = "block";
}

function closeAdvancedSettingsWindow() {
  document.getElementById("advancedSettingsWindow").style.display = "none";
}


// Function to populate notes based on selected octave
function populateNotes() {
  // Get selected octave value
  let octave = document.getElementById("octaveSelect").value;
  // Get the select element for notes
  let noteSelect = document.getElementById("noteSelect");
  // Clear existing options
  noteSelect.innerHTML = "";
  // Array of notes for the selected octave
  const notes = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
  // Generate options for each note in the selected octave
  notes.forEach(note => {
    let option = document.createElement("option");
    option.text = note + octave;
    noteSelect.add(option);
  });
}

// Call populateNotes function initially to populate notes for the default octave
populateNotes();
