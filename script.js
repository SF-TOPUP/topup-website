document.getElementById("topupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    alert("আপনার Top-Up অনুরোধ সফলভাবে গ্রহণ করা হয়েছে!");

    document.getElementById("topupForm").reset();
});
