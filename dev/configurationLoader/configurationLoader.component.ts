import {Component} from "angular2/core";
import {ConfigurationLoaderFile} from './configurationLoaderFile.component';

@Component({
    templateUrl: `app/configurationLoader/configurationLoader.component.html`,
    directives: [ConfigurationLoaderFile],
})

export class ConfigurationLoader {
    mode:string = 'file';
}
