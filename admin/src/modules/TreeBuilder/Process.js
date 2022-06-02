import { getParentPath , cloneObject } from "./Tools"
export class Process {
    constructor(treeBuilderContext) {
        this.context = treeBuilderContext
        this.adapter = treeBuilderContext.state.adapterName
        this.instance = treeBuilderContext.state.adapterInstance
    }
    
    async buildTreeItems() {
        // console.log("[Process]: --------------------------------------------------")
        const items = [];
        const keys = Object.keys(this.context.state.objects).sort();
        // console.log("[Process]: buildTreeItems: Keys:")
        // console.log(keys)
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].startsWith(this.adapter+'.'+this.instance)) {
                // console.log("[Process]: buildTreeItems: loop:")
                // console.log(this.context.state.objects[keys[i]])
                if (!keys[i].startsWith(this.adapter+'.'+this.instance+'.config')) {
                    items.push(cloneObject(this.context.state.objects[keys[i]]));
                }
            }
        }
        return items;
    }
    async buildDepths(treeItems) {

        

    }
}