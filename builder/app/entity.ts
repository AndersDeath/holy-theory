export class Entity {
  id: string;
  title: string;
  meta: any;
  body: string;
  category: string;

  constructor(title: string, meta: any, body: string, category: string) {
    this.id = this.makeId(title);
    this.title = title;
    this.meta = meta;
    this.body = body;
    this.category = category;
  }

  makeId(name: string): string {
    return "";
  }
}
