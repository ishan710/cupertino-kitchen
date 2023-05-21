const videoBtn = document.getElementById('video-btn')
const videoContainer = document.getElementById('video-container')

videoBtn.addEventListener('click', function () {
  // create video element
  const video = document.createElement('video')
  console.log('steak')
  if (Math.random() < 0.5) {
    console.log('steak')
    video.src = 'apple_restaurant/steak_eating.mov'
  } else {
    console.log('salad')
    video.src = 'apple_restaurant/salad_eating.mov'
  }

  video.autoplay = true

  // add event listener to detect when video ends
  video.addEventListener('ended', function () {
    // remove video and video container from DOM
    videoContainer.removeChild(video)
    videoContainer.style.display = 'none'
  })

  // add video element to video container
  videoContainer.appendChild(video)

  // show video container
  videoContainer.style.display = 'block'
})

const videoBtn_social = document.getElementById('video-btn_social')

videoBtn_social.addEventListener('click', function () {
  const video = document.createElement('video')
  video.src = 'apple_restaurant/salad_eating.mov'
  video.autoplay = true

  video.addEventListener('ended', function () {
    // remove video and video container from DOM
    videoContainer.removeChild(video)
    videoContainer.style.display = 'none'
  })

  // add video element to video container
  videoContainer.appendChild(video)

  // show video container
  videoContainer.style.display = 'block'
})
