import {Component} from 'angular2/core';
import {bootstrap} from "angular2/platform/browser";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {ConfigurationLoader} from './configuration-loader/configuration-loader.component';
import {Formular} from './formular/formular.component';

@Component({
    selector: 'sematic-form-suite',
    templateUrl: `app/sematicFormSuite.component.html`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/configuration-loader', name: 'ConfigurationLoader', component: ConfigurationLoader, useAsDefault: true},
    {path: '/formular', name: 'Formular', component: Formular}
])
export class SematicFormSuiteComponent {

}
