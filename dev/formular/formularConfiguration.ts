import {FormularConfigurationInterface} from "./formularConfiguration.interface";

export class FormularConfiguration implements FormularConfigurationInterface {
    sources: Object[] = [];
    layout: String[] = [];

    public addSource(source: {}) {
        this.sources.push(source);
    }

    public getSource(index: number) {
        return this.sources[index];
    }

    public getSources() {
        return this.sources;
    }

    public setLayout(layout: String[]) {
        this.layout = layout;
    }

    public getLayout() {
        return this.layout;
    }
}
