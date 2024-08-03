import axios from "axios";
import { Contact } from "../types/contact";


export class ContactService {
  static serverUlr = "http://localhost:3000";

  static getAllContacts() {
    let dataUrl = `${this.serverUlr}/contacts/`;
    return axios.get(dataUrl);
  }

  static getContact(contactId: string) {
    let dataUrl = `${this.serverUlr}/contacts/${contactId}`;
    return axios.get(dataUrl);
  }

  static createContact(contact : Contact) {
    let dataUrl = `${this.serverUlr}/contacts`;
    return axios.post(dataUrl, contact);
  }

  static updateContact(contact: any, contactId:string) {
    let dataUrl = `${this.serverUlr}/contacts/${contactId}`;
    return axios.put(dataUrl, contact);
  }

  static deleteContact(contactId : string) {
    let dataUrl = `${this.serverUlr}/contacts/${contactId}`;
    return axios.delete(dataUrl);
  }

  static getAllGroups() {
    let dataUrl = `${this.serverUlr}/groups/`;
    return axios.get(dataUrl);
  }

  static getGroup(contact : any) {
    let groupId = contact.groupId;
    let dataUrl = `${this.serverUlr}/groups/${groupId}`;
    return axios.get(dataUrl);
  }
}
