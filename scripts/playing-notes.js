let pauseSimpleChecker = false;
// check if currently played note matches displayed note (without an octave)
document.addEventListener('noteChanged', function (event) {
    if (!pauseSimpleChecker) {
        const currentNotePlaying = event.detail.currentNotePlaying;
        const currentNoteNav = document.querySelector(`.${CURRENT_NOTE_CLASS}`);

        if (currentNoteNav.textContent.trim() === currentNotePlaying) {
            console.log("dobrze");
            currentNoteNav.style.color = 'green';
            console.log(withoutInterval);
            if (withoutInterval) { pauseSimpleChecker = true; setTimeout(() => { updateNotesDisplay(); pauseSimpleChecker = false; }, 1000); }
            else if (!withInterval) { setTimeout(() => revertColorOfCurrentNote(), 1000); }
        }
    }
}

);