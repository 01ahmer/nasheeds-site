const btnMenu = document.querySelector('.btn-menu');
const dropdown = document.querySelector('.nav-content');

btnMenu.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display !== 'block' ? 'block' : 'none';
});

/* NASHEEDS */

let buttonHTML = '';

nasheeds.forEach((nasheed) => {
    buttonHTML += `
    <div class="btn-box">
      <i class="fa fa-play audio-btn js-audio-btn" data-audio-src="${nasheed.source}"></i>
      <audio download src="${nasheed.source}" class="audio js-audio"></audio>
      <p class="audio-name">${nasheed.name}</p>
      <a href="${nasheed.source}" download="${nasheed.name}">
      <i class="fa-solid fa-download download"></i></a>
    </div>
    `
});
console.log(buttonHTML)
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
})

/* SEARCH-BAR */

function searchNasheed() {
  // Get the search input value
  var searchInput = document.getElementById("search-item").value.toLowerCase();

  // Clear previous search results
  var nasheedResults = document.getElementById("btn-container");
  nasheedResults.innerHTML = "";

  // Perform the search logic
  var matchingNasheeds = nasheeds.filter(function(nasheed) {
    return nasheed.name.toLowerCase().includes(searchInput);
  });

  // Display the matching nasheeds
  matchingNasheeds.forEach(function(nasheed) {
    // Create nasheed button
    var nasheedButton = document.createElement("div");
    nasheedButton.className = "btn-box";
    nasheedButton.innerHTML = `
      <i class="fa fa-play audio-btn js-audio-btn" data-audio-src="${nasheed.source}"></i>
      <audio download src="${nasheed.source}" class="audio js-audio"></audio>
      <p class="audio-name">${nasheed.name}</p>
      <a href="${nasheed.source}" download="${nasheed.name}">
        <i class="fa-solid fa-download download"></i>
      </a>
    `;

    // Add nasheed button to search results
    nasheedResults.appendChild(nasheedButton);
  });
}

function search() {
  // Perform the search when a key is released
  searchNasheed();
}