import {Injectable} from "angular2/core";

import {FormularService} from "./../formular/formular.service";
import {ConfigurationLoaderService} from "./../configurationLoader/configurationLoader.service";
import {DISPEDIACORE} from "./mock-dispediaCore";

@Injectable()
export class TestService {

    constructor(private _formularService:FormularService, private _configurationLoaderService:ConfigurationLoaderService) {}

    load() {
        this._configurationLoaderService.loadString(DISPEDIACORE);
    }
}
