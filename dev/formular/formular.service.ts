import {Injectable} from "angular2/core";

import {FormularConfiguration} from "./formularConfiguration";

@Injectable()
export class FormularService {

    public formularConfiguration: FormularConfiguration = new FormularConfiguration();

    getFormularConfiguration() {
        return this.formularConfiguration;
    }

    loadFormularConfiguration() {
        console.log(this.formularConfiguration.getSources());
    }
}
