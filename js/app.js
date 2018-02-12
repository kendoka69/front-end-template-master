

var videos = [
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=186s", 
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=215s", 
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=238s",
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=272s",
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=305s",
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=334s",
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=364s",
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=457s",
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=486s",
    "https://www.youtube.com/watch?v=OMyuTsE1hl4&t=515s"
];


function getVideo() {
    var user_input = document.getElementById('myInput').value;

    if (user_input < 1 || user_input > videos.length) {
        alert("Please chose a number 1-10");
    } else {
        var index = user_input - 1;
        var chosen_vid = videos[index];
        window.open(chosen_vid);
    }
}