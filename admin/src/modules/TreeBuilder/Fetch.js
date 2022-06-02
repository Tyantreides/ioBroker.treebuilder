export class Fetch {
    constructor(socketInstance) {
        this.socket = socketInstance;
    }
    async fetchInstances() {
        console.log('[FETCH]: fetchInstances')
        return await this.socket.getAdapters();
    }
    async fetchObjects() {
        console.log('[FETCH]: fetchObjects')
        return await this.socket.getObjects(true);
    }
    async fetchEnums() {
        console.log('[FETCH]: fetchEnums')
        return await this.socket.getEnums();
    }
}