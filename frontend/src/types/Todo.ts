export class Todo {
    id: number;
    title: string;
    isChecked: boolean;

    constructor(id: number, title: string, isChecked: boolean) {
           this.id = id;
           this.title = title;
           this.isChecked = isChecked
    }
}