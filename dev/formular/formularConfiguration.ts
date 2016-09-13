import {FormularConfigurationInterface} from "./formularConfiguration.interface";

export class FormularConfiguration implements FormularConfigurationInterface {
    sources: Object[] = [];

    public addSource(source: {}) {
        this.sources.push(source);
    }

    public getSource(index: number) {
        return this.sources[index];
    }

    public getSources() {
        return this.sources;
    }
}
