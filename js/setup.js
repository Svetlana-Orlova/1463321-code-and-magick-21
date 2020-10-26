'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var QUANTITY = 4;
var modalSetup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = modalSetup.querySelector('.setup-close');
var listWizards = modalSetup.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var playerWizardCoatElement = modalSetup.querySelector('.wizard-coat');
var playerWizardEyesElement = modalSetup.querySelector('.wizard-eyes');
var playerWizardFireballElement = modalSetup.querySelector('.setup-fireball-wrap');
var eyesColorElement = modalSetup.querySelector('input[name="eyes-color"]');
var coatColorElement = modalSetup.querySelector('input[name="coat-color"]');
var fireballColorElement = modalSetup.querySelector('.fireball-color');

var getRandomElement = function (arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

var getFullName = function () {
  var fullName = getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES);
  return fullName;
};

var getWizards = function (amount) {
  var randomObjectArr = [];
  for (var i = 0; i < amount; i++) {
    randomObjectArr[i] = {
      name: getFullName(WIZARD_NAMES, WIZARD_SURNAMES),
      coatColorElement: getRandomElement(WIZARD_COAT_COLORS),
      eyesColorElement: getRandomElement(WIZARD_EYES_COLORS)
    };
  }
  return randomObjectArr;
};

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColorElement;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColorElement;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
var wizards = getWizards(QUANTITY);
for (var i = 0; i < QUANTITY; i++) {
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

var changeColor = function (array, field, item) {
  var currentColor = field.value
  if (array.indexOf(currentColor) === array.length - 1) {
    field.value = array[0];
  } else {
    field.value = array[array.indexOf(currentColor) + 1];
  }
  if (item.tagName === 'DIV') {
    item.style.backgroundColor = field.value;
  } else {
    item.style.fill = field.value;
  }
};

playerWizardCoatElement.addEventListener('click', function () {
  changeColor(WIZARD_COAT_COLORS, coatColorElement, playerWizardCoatElement);
});

playerWizardEyesElement.addEventListener('click', function () {
  changeColor(WIZARD_EYES_COLORS, eyesColorElement, playerWizardEyesElement);
});

playerWizardFireballElement.addEventListener('click', function () {
  changeColor(WIZARD_FIREBALL_COLORS, fireballColorElement, playerWizardFireballElement);
});


document.querySelector('.setup-similar').classList.remove('hidden');
modalSetup.classList.remove('hidden');
