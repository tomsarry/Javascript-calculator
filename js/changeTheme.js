let darkMode = localStorage.getItem("darkMode");
const DarkModeToggle = document.querySelector("#darkModeToggle");


const enableDarkMode = () => {
    document.body.classList.add("dark-theme");
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkMode", null);
}

// check for previous settings in localStorage
if (darkMode === "enabled") {
    enableDarkMode();
}

DarkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});