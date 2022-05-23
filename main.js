let newDate = '';

$(window).ready(getData);

$('#btn').on('click', function() {
    newDate = date.value;
    return getData();
});

function getData() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=PVdtYcjSTuenRt1s44hdW25oRDZLfO87FsFdmMq9&date=${newDate}`)
        .then(res => res.json())
        .then(data => {
            img.src = data.hdurl;
            info.textContent = data.explanation;
            title.textContent = data.title;
    });
};

