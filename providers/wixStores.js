const vs = require('vscode');
const { createCompletionList, isBackend } = require('./util');

const K = vs.CompletionItemKind;

const listFronend = createCompletionList([
  { name: 'getProductOptionsAvailability', kind: K.Method },
]);

const listBackend = createCompletionList([
  { name: 'getCurrentCart', kind: K.Method },
  { name: 'getProductOptionsAvailability', kind: K.Method },
]);

module.exports = {
  provideCompletionItems(doc, position) {
    const prefix = doc.lineAt(position).text.substr(0, position.character);

    if (prefix.endsWith('wixStores.')) {
      return isBackend(doc.uri.path) ? listBackend : listFronend;
    }
  },
};
