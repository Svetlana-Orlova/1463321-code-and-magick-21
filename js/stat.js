'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#ffffff';
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP_BAR = 50;
var TEXT_GAP = 20;
var CLOUD_TEXT = 'Ура вы победили!\nСписок результатов:';
var FONT = '16px PT Mono';
var FONT_BASELINE = 'hanging';
var FONT_COLOR = '#000000';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var PLAYER_NAME = 'Вы';
var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';

window.renderStatistics = function (ctx, names, times) {

  function renderWindow() {
    function renderCloud(x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
    }

    renderCloud(CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
    renderCloud(CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  }

  function renderText(text) {
    var lines = text.split('\n');
    ctx.fillStyle = FONT_COLOR;
    ctx.textBaseline = FONT_BASELINE;
    ctx.font = FONT;
    for (var i = 0; i < lines.length; i++) {
      var TEXT_X = CLOUD_X + 2 * GAP;
      var TEXT_Y = CLOUD_Y + 2 * GAP;
      ctx.fillText(lines[i], TEXT_X, TEXT_Y + TEXT_GAP * i);
    }
  }

  var maxTime = Math.max.apply(null, times);

  function renderColumns() {
    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = FONT_COLOR;
      var barHeight = Math.round(times[i] * BAR_HEIGHT / maxTime);
      var barOffsetX = CLOUD_X + GAP_BAR + (GAP_BAR + BAR_WIDTH) * i;
      var barOffsetY = CLOUD_Y + CLOUD_HEIGHT - GAP - 2 * TEXT_GAP - barHeight;

      ctx.fillText(Math.round(times[i]), barOffsetX, barOffsetY);
      ctx.fillText(names[i], barOffsetX, CLOUD_Y + CLOUD_HEIGHT - TEXT_GAP);

      if (names[i] === PLAYER_NAME) {
        ctx.fillStyle = PLAYER_COLOR;
      } else {
        ctx.fillStyle = 'rgb(0, 0, 255,' + Math.random() + ')';
      }

      ctx.fillRect(barOffsetX, CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_GAP, BAR_WIDTH, -barHeight);
    }
  }

  renderWindow();
  renderText(CLOUD_TEXT);
  renderColumns();
};
