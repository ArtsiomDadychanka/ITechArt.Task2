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
    var maxOutputS = maxOutputString || text.length;

    var newLineIdx, idx;
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
        var subIdx = 0,
          newWordIdx = 0,
          lastSpaceIdx = -1;
        for (idx = 0, subIdx = idx + 1; text[idx]; idx++, subIdx++) {
          if (text[idx] === ' ') {
            lastSpaceIdx = idx;
          }
          if (subIdx % maxLength === 0) {
            if (text[idx + 1] !== ' ') {
              formattedText.push(text.substring(newWordIdx, lastSpaceIdx + 1));
              subIdx = 1;
              newWordIdx = lastSpaceIdx + 1;
              idx = newWordIdx;
            } else {
              formattedText.push(text.substring(newWordIdx, idx + 1));
              newWordIdx = idx + 1;
              subIdx = 1;
            }
          }
        }
        break;
      case this._formatTypes.sentenceWrapping:
        formattedText.push(text);
        break;
      case this._formatTypes.noWrap:
        formattedText.push(text);
        break;
      default:
        break;
    }

    format === this._formatTypes.charWrapping && formattedText.push(text.substring(newLineIdx));
    format === this._formatTypes.wordWrapping && formattedText.push(text.substring(newWordIdx));

    return formattedText.join(this._formatChar).substring(0, maxOutputS);
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