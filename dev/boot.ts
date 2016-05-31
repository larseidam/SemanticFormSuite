///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {SematicFormSuiteComponent} from "./sematicFormSuite.component";
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(SematicFormSuiteComponent, [ROUTER_PROVIDERS]);
