import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Message {
  fromName: string;
  subject: string;
  date_message: string;
  _id: string;  
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] 
  urlmessages = "http://localhost:3000/messages"

  constructor(private httpClient: HttpClient) { }

  public getMessages() {    
    console.log(location);
    return this.httpClient.get(this.urlmessages);  
  }

  public getMessageById(id: string) {
    return this.httpClient.get(this.urlmessages+'/message/'+id);
  }

  public addMessage(message: Message) {
    return this.httpClient.post(this.urlmessages, message);
  }
  
  public editMessage(message: Message) {
    return this.httpClient.patch(this.urlmessages+'/message/'+message._id, message);
  }

  public removeMessage(id: string) {
    return this.httpClient.delete(this.urlmessages+'/message/'+id);
  }
  
}
