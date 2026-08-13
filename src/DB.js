export default class DB {
    static setApiURL(data){
        this.apiURL = data;
    }
    static async findALL(){
        const response = await fetch(this.apiURL + "todos");
        return response.json();
    }

    static async create(data){
        const response = await fetch(this.apiURL + "todos", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                content: data,
                completed: false,
                createdAt: Date.now(),
            }),
        });
        return response.json();
    }

    static async updateOne(data){
        const response = await fetch(this.apiURL + "todos/" + data.id, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                content: data.content,
                completed: data.completed,
            }),
        });
        return response.json();
    }

    static async deleteOneById(id){
        const response = await fetch(this.apiURL + "todos/" + id, {
            method: "DELETE",
        });
        return response.json();
    }
}
