import {Component} from "angular2/core";
import {FormularService} from "./formular.service";

@Component({
    selector: 'formular',
    templateUrl: `app/formular/formular.component.html`,
})
export class Formular {
    constructor(private _formularService: FormularService) {
        this._formularService.loadFormularConfiguration();
    }
}
