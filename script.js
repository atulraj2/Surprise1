document.addEventListener("DOMContentLoaded", function() {
    let timeLeft = 10;
    let countdownElement = document.getElementById("time");
    let hackerText = document.getElementById("hacker-text");
    let fixButton = document.getElementById("fix-btn");
    let alarm = document.getElementById("alarm");
    let voice = document.getElementById("voice");

    // Start Vibrating the Phone
    function startVibrate() {
        if (navigator.vibrate) {
            navigator.vibrate([500, 500, 500, 500, 500]);
        }
    }
    startVibrate();

    // Play Alarm Sound
    setTimeout(() => {
        alarm.play();
    }, 1000);

    // Play Creepy Voice
    setTimeout(() => {
        voice.play();
    }, 3000);

    // Fake Hacking Text
    let hackerMessages = [
        "Scanning files...",
        "Accessing camera...",
        "Downloading contacts...",
        "Bank details compromised...",
        "Injecting malware...",
        "Encrypting all files...",
        "Activating microphone...",
        "Camera is now recording...",
        "HACK COMPLETE!"
    ];

    let i = 0;
    let hackerInterval = setInterval(() => {
        hackerText.innerText = hackerMessages[i++];
        if (i >= hackerMessages.length) clearInterval(hackerInterval);
    }, 1000);

    // Start Countdown Timer
    let countdownInterval = setInterval(() => {
        timeLeft--;
        countdownElement.innerText = timeLeft;

        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            document.getElementById("hacked-screen").innerHTML = `
                <h1>😆 APRIL FOOLS! Your phone is safe! 😂</h1>
                <p>Hope you didn't panic too much! 😜</p>
            `;
            alarm.pause();
            voice.pause();
        }
    }, 1000);

    // Fake Fix Button (It Does Nothing)
    fixButton.addEventListener("click", function() {
        let password = prompt("Enter Password to Unlock:");
        if (password !== "admin123") {
            alert("Incorrect Password! Access Denied!");
            fixButton.innerText = "Access Denied!";
        } else {
            alert("ERROR! Malware Detected!");
            fixButton.innerText = "Can't Fix!";
        }
    });

    // Screen Flickering Effect
    document.body.classList.add("flicker");

    // Motion Shake Effect
    document.body.classList.add("shake");
});
