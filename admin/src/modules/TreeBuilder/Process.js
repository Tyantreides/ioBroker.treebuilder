import { cloneObject } from './Tools';
export class Process {
    constructor(treeBuilderContext) {
        this.context = treeBuilderContext;
        this.adapter = treeBuilderContext.state.adapterName;
        this.instance = treeBuilderContext.state.adapterInstance;
    }

    async buildTreeItems() {
        const items = [];
        const keys = Object.keys(this.context.state.objects).sort();
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(this.adapter+'.'+this.instance)) {
                if (!keys[i].startsWith(this.adapter+'.'+this.instance+'.config')) {
                    items.push(cloneObject(this.context.state.objects[keys[i]]));
                }
            }
        }
        return items;
    }
}