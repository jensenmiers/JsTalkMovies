// GLOBAL 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '046d43a4d0msh43cc091bb5b487fp1a042bjsn283d3103651c',
		'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
	}
};

// DOM SELECTORS
const termSearched = document.querySelector('#term-searched');
const countrySearched = document.querySelector('#country-searched')
const searchButton = document.querySelector('#search-button');
const form = document.querySelector('#form')
const detailMovieName = document.querySelector('#movie-name')
const detailImg = document.querySelector('#movie-image')
const detailPlatformName = document.querySelector('#platform-name')
const detailPlatformIcon = document.querySelector('#detail-icon')
const button1 = document.querySelector('.buttonLoad1')
const button2 = document.querySelector('.buttonLoad2')
const button3 = document.querySelector('.buttonLoad3')
const navImages1 = document.querySelector('.navImages1')
const navImages2 = document.querySelector('.navImages2')
const navImages3 = document.querySelector('.navImages3')
const platformList = document.querySelector('#platform-list')



// EVENT LISTENERS
navImages1.addEventListener('mouseover', () => navImages1.className = 'navImagesHover')
navImages1.addEventListener('mouseout', () => navImages1.className = 'navImages1')

navImages2.addEventListener('mouseover',() => navImages2.className = 'navImagesHover')
navImages2.addEventListener('mouseout', () => navImages2.className = 'navImages2')

navImages3.addEventListener('mouseover',() => navImages3.className = 'navImagesHover')
navImages3.addEventListener('mouseout', () => navImages3.className = 'navImages3')

button1.addEventListener('click', () => {
  button1.className = 'buttonClicked'
  button1.innerText = 'Voted!'
})

button2.addEventListener('click', () => {
  button2.className = 'buttonClicked'
  button2.innerText = 'Voted!'
})

button3.addEventListener('click', () => {
  button3.className = 'buttonClicked'
  button3.innerText = 'Voted!'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const term = termSearched.value
    const country = countrySearched.value
	getMovieResults(term, country)
  getPlatformNames(term, country)
})


// FETCHING
function getMovieResults(term, country) {
    return fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${term}&country=${country}`, options)
      .then(response => response.json())
      .then(resultObj => {
        console.log('full result Obj ', resultObj)

        const resultName = resultObj.results[0].name
        detailMovieName.textContent = resultName
  
        const resultImage = resultObj.results[0].picture
        detailImg.src = resultImage
        detailImg.className = 'resultImage'

        const resultPlatformIcon = resultObj.results[0].locations[0].icon
        detailPlatformIcon.src = resultPlatformIcon
        // detailPlatformIcon.className = 'detailIcon'
      }
        );
}

function getPlatformNames(term, country) {
  return fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${term}&country=${country}`, options)
    .then(response => response.json())
    .then(resultObj => {
      const platformNamesObject = resultObj.results[0].locations
      Object.values(platformNamesObject).forEach(platformObject => {
        const platformName = platformObject.display_name
        const newLi = document.createElement('li')
        newLi.textContent = platformName
        platformList.appendChild(newLi)
             }  ) } ) }