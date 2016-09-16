import {Component} from "angular2/core";
import {FormularService} from "./formular.service";
import {Renderer} from './../renderer/renderer.component';

@Component({
    selector: 'formular',
    templateUrl: `app/formular/formular.component.html`,
    directives: [Renderer],
})
export class Formular {
    constructor(private _formularService: FormularService) {}

    onClick($event) {
        this._formularService.loadFormularConfiguration();
    }
}
