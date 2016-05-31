import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {ConfigurationLoader} from './configuration-loader/configuration-loader.component';
import {Formular} from './formular/formular.component';

@Component({
    selector: 'sematic-form-suite',
    template: `
        <h1>Semantic Form Suite</h1>
        <header>
            <nav>
                <a [routerLink]="['ConfigurationLoader']">Configuration-Loader</a>
                <a [routerLink]="['Formular']">Formular</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/configuration-loader', name: 'ConfigurationLoader', component: ConfigurationLoader, useAsDefault: true},
    {path: '/formular', name: 'Formular', component: Formular}
])
export class SematicFormSuiteComponent {

}
