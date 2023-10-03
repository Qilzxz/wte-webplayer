function changeSong() {
    const changesong = document.getElementById('song-dropdown');
    const dittosongContainer = document.getElementById('ditto-song-container');
    const hypeboysongContainer = document.getElementById('hypeboy-song-container');
    var hypeboySong= document.getElementById('hypeboy-song');
    var dittoSong = document.getElementById('ditto-song');
    var omgSong = document.getElementById('omg-song');
    let getupSong = document.getElementById('getup-song');

    if (changesong.value === dittoSong) {
        dittosongContainer.style.display = 'block';
        hypeboysongContainer.style.display = 'none';
    } else if (changesong.value === hypeboySong) {
        hypeboysongContainer.style.display = 'block';
        dittosongContainer.style.display = 'none';
    }
}

changeSong();

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

