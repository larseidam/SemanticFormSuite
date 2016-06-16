import {FormularConfigurationInterface} from "./formularConfiguration.interface";

export class FormularConfiguration implements FormularConfigurationInterface {
    sources: null;
    constructor() {
        this.sources = [];
    }

    public addSource(source: {}) {
        this.sources.push(source);
    }
    public getSource(index: number) {
        return this.sources[index];
    }
}
