import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public messages: Message[]
  constructor(private data: DataService) {}

  ngOnInit() {
   this.getMessages();
  }

  refresh(ev) {
    this.getMessages()    
  }

  getMessages(){
    this.data.getMessages().subscribe((res: Message[]) => this.messages = res);
  }

}
