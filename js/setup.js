'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var quantity = 4;
var modalSetup = document.querySelector('.setup');
var listWizards = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandom = function (arr) {
  var randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

var getFullName = function () {
  var fullName = getRandom(wizardNames) + ' ' + getRandom(wizardSurnames);
  return fullName;
};

var getData = function (amount) {
  var randomObjectArr = [];
  for (var i = 0; i < amount; i++) {
    randomObjectArr[i] = {
      name: getFullName(wizardNames, wizardSurnames),
      coatColor: getRandom(wizardCoatColors),
      eyesColor: getRandom(wizardEyesColors)
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
var wizards = getData(quantity);
for (var i = 0; i < quantity; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

listWizards.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
modalSetup.classList.remove('hidden');
