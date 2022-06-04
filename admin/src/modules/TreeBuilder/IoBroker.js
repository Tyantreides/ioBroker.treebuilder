export default class ioBroker {
    constructor(socketInstance) {
        this.socket = socketInstance;
    }
    async fetchInstances() {
        //console.log('[ioBroker]: fetchInstances')
        return await this.socket.getAdapters();
    }
    async fetchObjects() {
        // console.log('[ioBroker]: fetchObjects')
        return await this.socket.getObjects(true);
    }
    async fetchEnums() {
        // console.log('[ioBroker]: fetchEnums')
        return await this.socket.getEnums();
    }
    async saveObject(options) {
        const obj = {
            _id: options.id,
            common: {
                name: options.common.name,
                role: options.common.role,
            },
            native: {
                id: options.native.id,
                name: options.native.name,
                parentId: options.native.parentId,
                type: options.native.type,
                depth: options.native.depth,
            },
            type: options.type
        };
        await this.socket.setObject(options.id, obj);
    }

    async deleteObject(id) {
        await this.socket.delObject(id);
    }

}