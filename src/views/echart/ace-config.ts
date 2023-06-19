import ace from 'ace-builds';


import modeJsonUrl from 'ace-builds/src-noconflict/mode-json?url';
ace.config.setModuleUrl('ace/mode/json',modeJsonUrl)



import workerBaseUrl from 'ace-builds/src-noconflict/worker-base?url';
ace.config.setModuleUrl('ace/mode/base', workerBaseUrl);

import themeChromeUrl from 'ace-builds/src-noconflict/theme-chrome?url';
ace.config.setModuleUrl('ace/theme/chrome', themeChromeUrl);

import workerJsonUrl from 'ace-builds/src-noconflict/worker-json?url';
ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl);


import snippetsJsonUrl from 'ace-builds/src-noconflict/snippets/json?url';
ace.config.setModuleUrl('ace/snippets/json', snippetsJsonUrl);

import 'ace-builds/src-noconflict/ext-language_tools';
ace.require("ace/ext/language_tools");
