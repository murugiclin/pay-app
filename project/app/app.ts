import { Application } from '@nativescript/core';
import { installMixins } from '@nativescript/core';

installMixins();
Application.run({ moduleName: 'app-root' });