export default class Util {
    static clone(obj) {
        return Object.assign({}, obj);
    }

    static updateList(list,obj){
        let generatedList = [];
        for (let listObject of list) {
            if (listObject.id === obj.id) {
                listObject = this.clone(obj);
            }
            generatedList.push(listObject);
        }
        return generatedList;
    }
}