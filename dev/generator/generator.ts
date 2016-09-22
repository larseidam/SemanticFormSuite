import {FormularConfiguration} from "./../formular/formularConfiguration";

export class Generator {
    constructor(private _formularConfiguration:FormularConfiguration) {
    }

    analyseSources() {
        var layout: String[] = [];
        this._formularConfiguration.getSources().forEach((source:[Object]) => {
            this.analyseSource(source, layout);
        });
        this._formularConfiguration.setLayout(layout);
    }

    analyseSource(source:[Object], layout:String[]) {
        source.forEach(resource => {
            if (resource['@type'][0] == "http://www.w3.org/2002/07/owl#ObjectProperty") {
                var labelValue: String = "";
                resource['http://www.w3.org/2000/01/rdf-schema#label'].forEach(label => {
                    if ('de' === label['@language']) {
                        labelValue = label['@value'];
                    } else if ('' === labelValue) {
                        labelValue = "kein Label gefunden"
                    }
                });
                layout.push('<td><span>' + labelValue + '</span></td><td><input value="' + resource['@id'] + '"></td>');
            }
        });
    }
}
