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
                        $('#img').attr('src', data.hdurl ?? data.url).show();
                        $('#video').hide();
                    } else {
                        $('#video').attr('src', data.url).show();
                        $('#img').hide();
                    }
                    $('#info').text(data.explanation);
                    $('#title').text(data.title);
                    $('#date').val(data.date);
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
                $('#img').attr('src', data[0].hdurl ?? data[0].url).show();
                $('#video').hide();
            } else {
                $('#video').attr('src', data[0].url).show();
                $('#img').hide();
            }
            $('#info').text(data[0].explanation);
            $('#title').text(data[0].title);
            $('#date').val(data[0].date);
            error.style.visibility = 'hidden';
        });
}
