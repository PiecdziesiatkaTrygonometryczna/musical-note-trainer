document.addEventListener("DOMContentLoaded", function () {
    const settingsPanel = document.querySelector('.modal');
    const toggleSettingsButton = document.getElementById('toggleSettings');

    toggleSettingsButton.addEventListener('click', function () {
        // Toggle the 'show-settings' class to show/hide the panel
        settingsPanel.classList.toggle('show-settings');
        
        // Check if the settings panel is now visible
        if (settingsPanel.classList.contains('show-settings')) {
            // If visible, set display to inline
            settingsPanel.style.display = 'inline';
        } else {
            // If hidden, set display to none
            settingsPanel.style.display = 'none';
        }
    });
});
