// external libaries
declare var jsonld: any;
//declare var rdf: any;

import {Injectable} from "angular2/core";

@Injectable()
export class ConfigurationLoaderService {
    public configuration

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
        	console.log(res);
        });
        return "";
    }
}
