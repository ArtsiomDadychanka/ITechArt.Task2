var textFormatter = {
  handleText: function(text, maxLength, formatType, maxOutputString) {
    if (!maxLength) {
      return text;
    }
    if (text.length < maxLength) {
      return text;
    }
    var formattedText = [];
    var format = formatType || this._formatTypes.noWrap;

    var newLineIdx, idx, subIdx, spaceIdx;
    switch (format) {
      case this._formatTypes.charWrapping:
        newLineIdx = 0;
        for (idx = 0; idx < text.length; idx++) {
          if ((idx + 1) % maxLength === 0 && idx != 0) {
            formattedText.push(text.substring(newLineIdx, idx + 1));
            newLineIdx = idx + 1;
          }
        }
        break;
      case this._formatTypes.wordWrapping:
        newLineIdx = 0;
        for (idx = 0, subIdx = 0; idx < text.length; idx++, subIdx++) {
          if ((idx + 1) % maxLength === 0 && idx != 0) {
            // if (text[idx] === this._wrapChars.space) {
            //   formattedText.push(text.substring(newLineIdx, idx + 1));
            //   newLineIdx = idx + 1;
            // } else {

            // }
            //TODO for space
            spaceIdx = text.indexOf(this._wrapChars.space, newLineIdx);
            formattedText.push(text.substring(newLineIdx, spaceIdx + 1));
            newLineIdx = spaceIdx + 1;
            idx = spaceIdx + 1;
          }
        }
        break;
      case this._formatTypes.noWrap:
        formattedText.push(text);
        break;
      default:
        break;
    }





    format === this._formatTypes.charWrapping && formattedText.push(text.substring(newLineIdx));
    format === this._formatTypes.wordWrapping && formattedText.push(text.substring(newLineIdx));

    return formattedText.join(this._formatChar);
  },
  _formatTypes: {
    wordWrapping: "перенос по слову",
    charWrapping: "перенос по символу",
    sentenceWrapping: "перенос по предложению",
    noWrap: "переносов нет"
  },
  _wrapChars: {
    space: ' ',
    dot: '.'
  },
  _formatChar: "\n"
}