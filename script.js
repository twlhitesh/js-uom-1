// Function to update the preview image and text
function upDate(element) {
    console.log("Event triggered");
    var previewPic = element.getAttribute('src');
    var altText = element.getAttribute('alt');
    console.log("Preview Image Source:", previewPic);
    console.log("Alt Text:", altText);
    document.getElementById('image').innerText = altText;
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic + ')';
}

// Function to undo the changes and reset to default text and background
function undo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerText = "Hover over an image below to display here.";
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    var previews = document.querySelectorAll('.preview');
    previews.forEach(function(preview) {
        preview.addEventListener('mouseover', function() {
            upDate(this);
        });
    });

    document.getElementById('image').addEventListener('mouseout', function() {
        undo();
    });
});
