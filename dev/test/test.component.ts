import {Component} from "angular2/core";
import {TestService} from "./test.service";

@Component({
    selector: 'test',
    template: ``,
})
export class Test {

    constructor(private _TestService: TestService) {}

    ngOnInit():any {
        this._TestService.load();
    }
}
