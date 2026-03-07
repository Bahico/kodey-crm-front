import {provideEventPlugins} from "@taiga-ui/event-plugins";
import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {NgxMaskConfig, provideEnvironmentNgxMask} from 'ngx-mask';
import {provideQuillConfig} from 'ngx-quill';

const maskConfig: Partial<NgxMaskConfig> = {validation: false};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideEventPlugins(),
    provideEnvironmentNgxMask(maskConfig),
    provideQuillConfig({
      customOptions: [{
        import: 'formats/font',
        whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
      }]
    })
  ]
};
