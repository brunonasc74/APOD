let newDate = '';

$(window).ready(getData);

$('#btn').on('click', function() {
    newDate = date.value;
    return getData();
});

$('#count').on('click', () => getRandomData());

function getData() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=PVdtYcjSTuenRt1s44hdW25oRDZLfO87FsFdmMq9&date=${newDate}`)
        .then(res => {
            if(res.ok) {
                res.json().then(data => {
                    if(data.media_type !== 'video') {
                        img.src = data.hdurl ?? data.url;
                        img.style.display = 'block'
                        video.style.display = 'none'
                    } else {
                        video.src = data.url;
                        img.style.display = 'none'
                        video.style.display = 'block'
                    }
                    info.textContent = data.explanation;
                    title.textContent = data.title;
                    date.value = data.date;
                    error.style.visibility = 'hidden';
                });
            } else (error.style.visibility = 'visible');
        });
};

function getRandomData() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=PVdtYcjSTuenRt1s44hdW25oRDZLfO87FsFdmMq9&count=1`)
        .then(res => res.json())
        .then(data => {
            if(data[0].media_type !== 'video') {
                img.src = data[0].hdurl ?? data[0].url;
                img.style.display = 'block'
                video.style.display = 'none'
            } else {
                video.src = data[0].url;
                img.style.display = 'none'
                video.style.display = 'block'
            }
            info.textContent = data[0].explanation;
            title.textContent = data[0].title;
            date.value = data[0].date;
            error.style.visibility = 'hidden';
        });
}
