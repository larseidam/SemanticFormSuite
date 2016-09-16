import {Injectable} from "angular2/core";

import {FormularConfiguration} from "./formularConfiguration";
import {Generator} from "./../generator/generator";

@Injectable()
export class FormularService {

    private _formularConfiguration: FormularConfiguration = new FormularConfiguration();
    private _formularGenerator: Generator = new Generator(this._formularConfiguration);

    getFormularConfiguration() {
        return this._formularConfiguration;
    }

    loadFormularConfiguration() {
        this._formularGenerator.analyseSources();
    }
}
