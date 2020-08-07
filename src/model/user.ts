import { v4 as uuid } from 'uuid'

export default class User {
  id: string;
  name: string;
  color: string;

  constructor(id: string, name: string, color: string) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}
