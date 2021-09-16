const form = document.querySelector('form');

const headSliderHue = document.querySelector('#head-hue');
const headSliderBrightness = document.querySelector('#head-brightness');
const headSliderSaturate = document.querySelector('#head-saturate');
const headSliderSepia = document.querySelector('#head-sepia');
const headSliderInvert = document.querySelector('#head-invert');
let currentHead = {};
let currentEyes = '';
let currentNose = '';
let currentMouth = '';

form.addEventListener(
  'submit',
  function (e) {
    e.preventDefault();
    clearAll();
    let data = new FormData(form);
    for (const entry of data) {
      let entryName = entry[0];
      let entryValue = entry[1];
      let entryLetter = entryValue.slice(entryValue.length - 1).toLowerCase();
      let imageFile = `images/${entryLetter}-${entryName}.png`;
      console.log(entryName, imageFile);
      addImage(entryName, imageFile);
    }
  },
  false
);

const addImage = function (name, file) {
  let imageTag = document.createElement('img');
  let imageDiv = document.querySelector(`div.${name}`);
  imageTag.classList.add(name);
  imageTag.setAttribute('src', file);
  imageDiv.append(imageTag);
  setCurrent(name);
  currentHead.setAttribute(
    'style',
    `filter: invert(${headSliderInvert.value}%) brightness(${headSliderBrightness.value}%) sepia(${headSliderSepia.value}%) saturate(${headSliderSaturate.value}%) hue-rotate(${headSliderHue.value}deg);`
  );
};

const clearAll = function (colorSave) {
  let allImageTags = document.querySelectorAll('img');
  allImageTags.forEach(function (e) {
    if (!colorSave) {
      e.remove();
    }
  });
};

const setCurrent = function (bodyPart) {
  switch (bodyPart) {
  case 'head':
    currentHead = document.querySelector(`.${bodyPart} img`);
    break;
  case 'eyes':
    currentEyes = document.querySelector(`.${bodyPart} img`);
    break;
  case 'nose':
    currentNose = document.querySelector(`.${bodyPart} img`);
    break;
  case 'mouth':
    currentMouth = document.querySelector(`.${bodyPart} img`);
    break;
  default:
  }
};

headSliderHue.addEventListener('input', function (e) {
  currentHead.setAttribute(
    'style',
    `filter: invert(${headSliderInvert.value}%) brightness(${headSliderBrightness.value}%) sepia(${headSliderSepia.value}%) saturate(${headSliderSaturate.value}%) hue-rotate(${e.target.value}deg);`
  );
});

headSliderBrightness.addEventListener('input', function (e) {
  currentHead.setAttribute(
    'style',
    `filter: invert(${headSliderInvert.value}%) brightness(${e.target.value}%) sepia(${headSliderSepia.value}%) saturate(${headSliderSaturate.value}%) hue-rotate(${headSliderHue.value}deg);`
  );
});

headSliderSaturate.addEventListener('input', function () {
  currentHead.setAttribute(
    'style',
    `filter: invert(${headSliderInvert.value}%) brightness(${headSliderBrightness.value}%) sepia(${headSliderSepia.value}%) saturate(${headSliderSaturate.value}%) hue-rotate(${headSliderHue.value}deg);`
  );
});
headSliderSepia.addEventListener('input', function () {
  currentHead.setAttribute(
    'style',
    `filter: invert(${headSliderInvert.value}%) brightness(${headSliderBrightness.value}%) sepia(${headSliderSepia.value}%) saturate(${headSliderSaturate.value}%) hue-rotate(${headSliderHue.value}deg);`
  );
});
headSliderInvert.addEventListener('input', function () {
  currentHead.setAttribute(
    'style',
    `filter: invert(${headSliderInvert.value}%) brightness(${headSliderBrightness.value}%) sepia(${headSliderSepia.value}%) saturate(${headSliderSaturate.value}%) hue-rotate(${headSliderHue.value}deg);`
  );
});
