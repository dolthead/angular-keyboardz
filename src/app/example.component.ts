import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  @ViewChild('messageInput') messageInput: any;
  message = '';
  output = '';

  sendMessage() {
    if (this.message.trim()) {
      console.log(this.message);
      this.output = this.message;
      this.message = '';
    }
    this.messageInput.setFocus();
  }

  keyDownEnter(event) {
    event.preventDefault();
    if (!event.shiftKey) {
      this.sendMessage();
    }
  }
}
