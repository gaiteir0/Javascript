function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = "none");
}

const buttons = {
    "js-history": "popup-js-history",
    "relation-html-css": "popup-relation-html-css",
    "relation-php": "popup-relation-php"
};

let currentPopup = null;

for (const [buttonId, popupId] of Object.entries(buttons)) {
    document.getElementById(buttonId).onclick = () => {
        const popup = document.getElementById(popupId);
        currentPopup === popup ? closePopup() : (closePopup(), document.getElementById("overlay").style.display = "block", popup.style.display = "block", currentPopup = popup);
    };
}

document.addEventListener("DOMContentLoaded", closePopup);
