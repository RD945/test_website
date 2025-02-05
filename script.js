// Block copy-paste using right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("Right-click is disabled on this page.");
});

// Block copy-paste using keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Check for Ctrl key (or Cmd key on Mac) combined with C or V
    if ((event.ctrlKey || event.metaKey) && (event.key === 'c' || event.key === 'v')) {
        event.preventDefault();
        alert("Copy-paste is disabled on this page.");
    }
});

// Detect tab or window change
let isTabActive = true;

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        isTabActive = false;
    } else {
        if (!isTabActive) {
            alert("You switched tabs or windows! Please stay on this page.");
            isTabActive = true;
        }
    }
});

// Block text selection using JavaScript
document.addEventListener('selectstart', function(event) {
    event.preventDefault();
});