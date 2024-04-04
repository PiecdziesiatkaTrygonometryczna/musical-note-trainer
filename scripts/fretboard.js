document.getElementById("stringCheckboxToggle").addEventListener("change", function() {
    var stringImage = document.getElementById("1st-string-wholes");
    if (this.checked) {
        stringImage.style.display = "inline";
    } else {
        stringImage.style.display = "none";
    }
});

document.getElementById("stringCheckboxToggle2").addEventListener("change", function() {
    var stringImage = document.getElementById("1st-string-sharps");
    if (this.checked) {
        stringImage.style.display = "inline";
    } else {
        stringImage.style.display = "none";
    }
});
