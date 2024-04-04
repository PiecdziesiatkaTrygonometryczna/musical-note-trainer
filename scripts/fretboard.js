document.getElementById("stringCheckboxToggle").addEventListener("change", function() {
    var stringImage = document.getElementById("stringImage");
    if (this.checked) {
        stringImage.style.display = "inline";
    } else {
        stringImage.style.display = "none";
    }
});
