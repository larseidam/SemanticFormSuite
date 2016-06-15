import {Component} from "angular2/core";
import {ConfigurationLoaderService} from "./configurationLoader.service";

@Component({
    selector: 'configurationLoaderFile',
    templateUrl: `app/configurationLoader/configurationLoaderFile.component.html`,
    providers: [ConfigurationLoaderService],
})
export class ConfigurationLoaderFile {

    constructor(private _configurationLoaderService: ConfigurationLoaderService) {}

    onChange($event) {
        this._configurationLoaderService.loadFile($event.target.files[0]);
    }
}
