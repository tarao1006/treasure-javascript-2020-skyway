import { v4 as uuid } from 'uuid'

export default class User {
  id: string;
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.id = uuid();
    this.name = name;
    this.color = color;
  }
}
