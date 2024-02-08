import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  @ViewChild('messageInput') messageInput: HTMLIonTextareaElement | undefined = undefined;
  message = '';
  output = '';

  sendMessage() {
    if (this.message.trim()) {
      console.log(this.message);
      this.output = this.message;
      this.message = '';
    }
    this.messageInput?.setFocus();
  }

  keyDownEnter(event: any) {
    event.preventDefault();
    if (!event.shiftKey) {
      this.sendMessage();
    }
  }
}
