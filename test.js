let buttonHTML = '';

nasheeds.forEach((nasheed) => {
    buttonHTML += `
    <div class="btn-box">
        <i class="fa fa-play audio-btn js-audio-btn" data-audio-src="${nasheed.source}"></i>
        <audio download src="${nasheed.source}" class="audio js-audio"></audio>
        <p class="audio-name">${nasheed.name}</p>
        <a href="${nasheed.source}" download="${nasheed.name}">
        <button class="download">Download</button></a>
    </div>
    `;
});
console.log(buttonHTML);
document.querySelector('.btn-container').innerHTML = buttonHTML;

let audio = new Audio();

document.querySelectorAll('.js-audio-btn').forEach((button) => {
    button.addEventListener('click', () => {
        audioSrc = button.dataset.audioSrc;

        audio.src = audioSrc;

        if (button.classList.contains('fa-play')) {
            audio.play();
            button.classList.remove('fa-play');
            button.classList.add('fa-pause');
        } else if (button.classList.contains('fa-pause')) {
            audio.pause();
            button.classList.remove('fa-pause');
            button.classList.add('fa-play');
        }
    })
});

/* TEST */

var playButton = document.getElementById('playButton');
var audioa = document.getElementById('audio');

playButton.addEventListener('click', function() {
  if (audioa.paused) {
    audioa.play();
    playButton.classList.remove('fa-play');
    playButton.classList.add('fa-pause');
  } else {
    audioa.pause();
    playButton.classList.remove('fa-pause');
    playButton.classList.add('fa-play');
  }
});