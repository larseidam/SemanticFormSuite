// external libaries
declare var jsonld: any;

import {Injectable} from "angular2/core";
import {FormularService} from "./../formular/formular.service";

@Injectable()
export class ConfigurationLoaderService {
    constructor(private _formularService:FormularService) {}

    readFile(file:File) {
        return new Promise(function (fulfill, reject){
            var reader = new FileReader();
            reader.onload = () => {
                fulfill(reader.result);
            };

            reader.onerror = () => {
                return reject(this);
            };

            if (/^image/.test(file.type)) {
                  reader.readAsDataURL(file);
                } else {
                  reader.readAsText(file);
            }
        })
    }

    loadFile(file: File) {
        this.readFile(file).then(res => {
            var promises = jsonld.promises;
            return promises.fromRDF(res, {format: 'application/nquads'})
        }).then(res => {
            this._formularService.getFormularConfiguration().addSource(res);
        });
    }
}
