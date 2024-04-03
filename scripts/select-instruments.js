document.getElementById("guitarButton").addEventListener("click", function () {
    var options = document.getElementById("guitarOptions");
    options.style.display = options.style.display === "block" ? "none" : "block";
});
document.getElementById("guitar24FretsButton").addEventListener("click", selectGuitar24FretsNotes);
document.getElementById("guitar22FretsButton").addEventListener("click", selectGuitar22FretsNotes);
document.getElementById("guitar21FretsButton").addEventListener("click", selectGuitar21FretsNotes);
document.getElementById("guitarEStringButton").addEventListener("click", selectGuitarEStringNotes);
document.getElementById("guitarDropDStringButton").addEventListener("click", selectGuitarDropDStringNotes);
document.getElementById("guitarAStringButton").addEventListener("click", selectGuitarAStringNotes);
document.getElementById("guitarDStringButton").addEventListener("click", selectGuitarDStringNotes);
document.getElementById("guitarGStringButton").addEventListener("click", selectGuitarGStringNotes);
document.getElementById("guitarBStringButton").addEventListener("click", selectGuitarBStringNotes);
document.getElementById("guitarHighEStringButton").addEventListener("click", selectGuitarHighEStringNotes);


function selectGuitar24FretsNotes() {
    advancedSelectedNotes = [];
    let guitar22FretsNotes = ['E2', 'F2', 'F♯2', 'G2', 'G♯2', 'A2', 'A♯2', 'B2', 'C3', 'C♯3', 'D3', 'D♯3',
        'E3', 'F3', 'F♯3', 'G3', 'G♯3', 'A3', 'A♯3', 'B3', 'C4', 'C♯4', 'D4', 'D♯4', 'E4', 'F4',
        'F♯4', 'G4', 'G♯4', 'A4', 'A♯4', 'B4', 'C5', 'C♯5', 'D5', 'D♯5', 'E5', 'F5', 'F♯5', 'G5',
        'G♯5', 'A5', 'A♯5', 'B5', 'C6', 'C♯6', 'D6', 'D♯6', 'E6'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitar22FretsNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}
function selectGuitar22FretsNotes() {
    advancedSelectedNotes = [];
    let guitar22FretsNotes = ['E2', 'F2', 'F♯2', 'G2', 'G♯2', 'A2', 'A♯2', 'B2', 'C3', 'C♯3', 'D3', 'D♯3',
        'E3', 'F3', 'F♯3', 'G3', 'G♯3', 'A3', 'A♯3', 'B3', 'C4', 'C♯4', 'D4', 'D♯4', 'E4', 'F4',
        'F♯4', 'G4', 'G♯4', 'A4', 'A♯4', 'B4', 'C5', 'C♯5', 'D5', 'D♯5', 'E5', 'F5', 'F♯5', 'G5',
        'G♯5', 'A5', 'A♯5', 'B5', 'C6', 'C♯6', 'D6'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitar22FretsNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}

function selectGuitar21FretsNotes() {
    advancedSelectedNotes = [];
    let guitar22FretsNotes = ['E2', 'F2', 'F♯2', 'G2', 'G♯2', 'A2', 'A♯2', 'B2', 'C3', 'C♯3', 'D3', 'D♯3',
        'E3', 'F3', 'F♯3', 'G3', 'G♯3', 'A3', 'A♯3', 'B3', 'C4', 'C♯4', 'D4', 'D♯4', 'E4', 'F4',
        'F♯4', 'G4', 'G♯4', 'A4', 'A♯4', 'B4', 'C5', 'C♯5', 'D5', 'D♯5', 'E5', 'F5', 'F♯5', 'G5',
        'G♯5', 'A5', 'A♯5', 'B5', 'C6', 'C♯6'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitar22FretsNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}


function selectGuitarEStringNotes() {
    advancedSelectedNotes = [];
    let guitarEStringNotes = ['E2', 'F2', 'F♯2', 'G2', 'G♯2', 'A2', 'A♯2', 'B2', 'C3', 'C♯3', 'D3', 'D♯3'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitarEStringNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}

function selectGuitarDropDStringNotes() {
    advancedSelectedNotes = [];
    let guitarEStringNotes = ['D2', 'D♯2', 'E2', 'F2', 'F♯2', 'G2', 'G♯2', 'A2', 'A♯2', 'B2', 'C3', 'C♯3'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitarEStringNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}


function selectGuitarAStringNotes() {
    advancedSelectedNotes = [];
    let guitarAStringNotes = ['A2', 'A♯2', 'B2', 'C3', 'C♯3', 'D3', 'D♯3', 'E3', 'F3', 'F♯3', 'G3', 'G♯3'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitarAStringNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}



function selectGuitarDStringNotes() {
    advancedSelectedNotes = [];
    let guitarDStringNotes = ['D3', 'D♯3', 'E3', 'F3', 'F♯3', 'G3', 'G♯3', 'A3', 'A♯3', 'B3', 'C4', 'C♯4'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitarDStringNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}



function selectGuitarGStringNotes() {
    advancedSelectedNotes = [];
    let guitarGStringNotes = ['G3', 'G♯3', 'A3', 'A♯3', 'B3', 'C4', 'C♯4', 'D4', 'D♯4', 'E4', 'F4', 'F♯4'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitarGStringNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}


function selectGuitarBStringNotes() {
    advancedSelectedNotes = [];
    let guitarBStringNotes = ['B3', 'C4', 'C♯4', 'D4', 'D♯4', 'E4', 'F4', 'F♯4', 'G4', 'G♯4', 'A4', 'A♯4'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitarBStringNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}



function selectGuitarHighEStringNotes() {
    advancedSelectedNotes = [];
    let guitarHighEStringNotes = ['E4', 'F4', 'F♯4', 'G4', 'G♯4', 'A4', 'A♯4', 'B4', 'C5', 'C♯5', 'D5', 'D♯5'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (guitarHighEStringNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}


let pianoButton = document.createElement("button");
pianoButton.textContent = "Keyboard";
pianoButton.onclick = function () {
    selectPianoNotes();
};
document.querySelector(".instrument-buttons").appendChild(pianoButton);


function selectPianoNotes() {
    advancedSelectedNotes = [];
    let pianoNotes = ['C2', 'C♯2', 'D2', 'D♯2', 'E2', 'F2', 'F♯2', 'G2', 'G♯2', 'A2', 'A♯2', 'B2',
        'C3', 'C♯3', 'D3', 'D♯3', 'E3', 'F3', 'F♯3', 'G3', 'G♯3', 'A3', 'A♯3', 'B3', 'C4', 'C♯4',
        'D4', 'D♯4', 'E4', 'F4', 'F♯4', 'G4', 'G♯4', 'A4', 'A♯4', 'B4', 'C5', 'C♯5', 'D5', 'D♯5',
        'E5', 'F5', 'F♯5', 'G5', 'G♯5', 'A5', 'A♯5', 'B5', 'C6', 'C♯6', 'D6', 'D♯6', 'E6', 'F6',
        'F♯6', 'G6', 'G♯6', 'A6', 'A♯6', 'B6', 'C7'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (pianoNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}

let bassGuitarButton = document.createElement("button");
bassGuitarButton.textContent = "Gitara basowa";
bassGuitarButton.onclick = function () {
    selectBassGuitarNotes();
};
document.querySelector(".instrument-buttons").appendChild(bassGuitarButton);

function selectBassGuitarNotes() {
    advancedSelectedNotes = [];
    let bassGuitarNotes = ['E1', 'F1', 'F♯1', 'G1', 'G♯1', 'A1', 'A♯1', 'B1', 'C2', 'C♯2', 'D2', 'D♯2',
        'E2', 'F2', 'F♯2', 'G2', 'G♯2', 'A2', 'A♯2', 'B2', 'C3', 'C♯3', 'D3', 'D♯3', 'E3', 'F3',
        'F♯3', 'G3', 'G♯3', 'A3', 'A♯3', 'B3', 'C4', 'C♯4', 'D4', 'D♯4'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (bassGuitarNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}

let violinButton = document.createElement("button");
violinButton.textContent = "Skrzypce";
violinButton.onclick = function () {
    selectViolinNotes();
};
document.querySelector(".instrument-buttons").appendChild(violinButton);


function selectViolinNotes() {
    advancedSelectedNotes = [];
    let violinNotes = ['G3', 'G♯3', 'A3', 'A♯3', 'B3', 'C4', 'C♯4', 'D4', 'D♯4', 'E4', 'F4',
        'F♯4', 'G4', 'G♯4', 'A4', 'A♯4', 'B4', 'C5', 'C♯5', 'D5', 'D♯5', 'E5', 'F5', 'F♯5', 'G5',
        'G♯5', 'A5', 'A♯5', 'B5', 'C6', 'C♯6', 'D6', 'D♯6', 'E6', 'F6', 'F♯6', 'G6', 'G♯6', 'A6'
        , 'A♯6', 'B6', 'C7', 'C♯7', 'D7', 'D♯7', 'E7'];
    let noteButtons = document.querySelectorAll("#noteButtonsContainer .advanced-note-button");
    noteButtons.forEach(button => {
        if (violinNotes.includes(button.textContent)) {
            button.classList.add("selected");
            advancedSelectedNotes.push(button.value);
        } else {
            button.classList.remove("selected");
        }
    });
}
