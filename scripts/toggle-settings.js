document.addEventListener("DOMContentLoaded", function () {
    const settingsPanel = document.querySelector('.settings');
    const toggleSettingsButton = document.getElementById('toggleSettings');

    toggleSettingsButton.addEventListener('click', function () {
        settingsPanel.classList.toggle('show-settings');
    });
});
