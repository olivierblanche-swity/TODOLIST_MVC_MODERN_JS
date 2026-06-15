export default class DB {
    static setApiURL(data){
        this.apiURL = data;
    }
    static async findALL(){
        const response = await fetch(this.apiURL + "todos");
        return response.json();
    }
}