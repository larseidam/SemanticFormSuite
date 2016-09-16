import {Component} from "angular2/core";
import {FormularService} from "./../formular/formular.service";

@Component({
    selector: 'renderer',
    templateUrl: `app/renderer/renderer.component.html`,
})
export class Renderer {
    public layout: String[];

    constructor(private _formularService: FormularService) {}

    getLayout() {
        this.layout = this._formularService.getFormularConfiguration().getLayout();
    }

    ngOnInit():any {
        this.getLayout();
    }
}
