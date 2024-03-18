<script setup>
import {onMounted} from "vue";
import {usePicturesStore} from "../stores/pictures.js";

const width = 320;
let height = 0;

let streaming = false;

let video = null;
let canvas = null;
let photo = null;
let photoButton = null;

function startup() {

  video = document.getElementById("video");
  canvas = document.getElementById("canvas");
  photo = document.getElementById("photo");
  photoButton = document.getElementById("photoButton");

  navigator.mediaDevices
      .getUserMedia({video: true, audio: false})
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

  video.addEventListener(
      "canplay",
      () => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          streaming = true;
        }
      },
      false,
  );

  clearphoto();
}

// Fill the photo with an indication that none has been
// captured.

function clearphoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}

// Capture a photo by fetching the current contents of the video
// and drawing it into a canvas, then converting that to a PNG
// format data URL. By drawing it on an offscreen canvas and then
// drawing that to the screen, we can change its size and/or apply
// other changes before drawing it.

function takepicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);

    const pictures = usePicturesStore();
    pictures.addPicture(data);
  } else {
    clearphoto();
  }
}

onMounted(() => {
  startup();
})
</script>
<template>
  <div class="contentarea">
    <h1>Take a pic!</h1>
    <div class="camera">
      <video id="video" ref="videoRef">Video stream not available.</video>
      <button id="photoButton" ref="photoButtonRef" v-on:click="takepicture">Take photo</button>
    </div>
    <canvas id="canvas" ref="canvasRef" hidden></canvas>
    <div>
      <div class="output">
        <img id="photo" ref="photoRef" alt="The screen capture will appear in this box." src=""/>
      </div>
    </div>
  </div>
</template>
<style scoped>
#video {
  border: 1px solid black;
  width: 320px;
  height: 240px;
}

#photo {
  border: 1px solid black;
  width: 320px;
  height: 240px;
}

#canvas {
  display: none;
}

.camera {
  width: 340px;
  display: inline-block;
}

.output {
  width: 340px;
  display: inline-block;
  vertical-align: top;
}

#photoButton {
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  bottom: 32px;
  background-color: rgb(0 150 0 / 50%);
  border: 1px solid rgb(255 255 255 / 70%);
  box-shadow: 0px 0px 1px 2px rgb(0 0 0 / 20%);
  font-size: 14px;
  font-family: inherit;
  color: rgb(255 255 255 / 100%);
}

.contentarea {
  font-size: 16px;
  font-family: inherit;
}

</style>