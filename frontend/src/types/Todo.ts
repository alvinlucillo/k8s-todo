export class Todo {
  id: string;
  title: string;
  isChecked: boolean;

  constructor(id: string, title: string, isChecked: boolean) {
    this.id = id;
    this.title = title;
    this.isChecked = isChecked;
  }
}
