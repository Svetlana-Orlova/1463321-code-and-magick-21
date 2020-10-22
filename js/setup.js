'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var quantity = 4;
var modalSetup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = modalSetup.querySelector('.setup-close');
var listWizards = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var playerWizardCoat = document.querySelector('.setup-wizard').querySelector('.wizard-coat');
var playerWizardEyes = document.querySelector('.setup-wizard').querySelector('.wizard-eyes');
var playerWizardFireball = document.querySelector('.setup-fireball-wrap');
var eyesColor = document.querySelector('.eyes-color');
var coatColor = document.querySelector('.coat-color');
var fireballColor = document.querySelector('.fireball-color');

var getRandomElement = function (arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

var getFullName = function () {
  var fullName = getRandomElement(wizardNames) + ' ' + getRandomElement(wizardSurnames);
  return fullName;
};

var getWizards = function (amount) {
  var randomObjectArr = [];
  for (var i = 0; i < amount; i++) {
    randomObjectArr[i] = {
      name: getFullName(wizardNames, wizardSurnames),
      coatColor: getRandomElement(wizardCoatColors),
      eyesColor: getRandomElement(wizardEyesColors)
    };
  }
  return randomObjectArr;
};

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
var wizards = getWizards(quantity);
for (var i = 0; i < quantity; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

listWizards.appendChild(fragment);

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  modalSetup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  modalSetup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

playerWizardCoat.addEventListener('click', function () {
  var randomColor = getRandomElement(wizardCoatColors);
  playerWizardCoat.style.fill = randomColor;
  coatColor.value = randomColor;
});

playerWizardEyes.addEventListener('click', function () {
  var randomColor = getRandomElement(wizardEyesColors);
  playerWizardEyes.style.fill = randomColor;
  eyesColor.value = randomColor;
});

playerWizardFireball.addEventListener('click', function () {
  var randomColor = getRandomElement(wizardFireballColors);
  playerWizardFireball.style.background = randomColor;
  fireballColor.value = randomColor;
});


document.querySelector('.setup-similar').classList.remove('hidden');
modalSetup.classList.remove('hidden');
