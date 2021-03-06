import { languages, workspace } from 'vscode';

import modules from './modules';
import roles from './roles';

const config = workspace.getConfiguration('corvid.autocomplete', null);
const providers = [];

function register(provider, trigger = '.') {
  return languages.registerCompletionItemProvider(
    { scheme: 'file', language: 'javascript' },
    provider,
    trigger,
  );
}

if (config.get('import')) {
  providers.push(register(modules, '.'));
}

if (config.get('$w')) {
  providers.push(register(roles, '#'));
}

export default providers;
