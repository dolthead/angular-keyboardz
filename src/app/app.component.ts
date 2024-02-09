import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { dummyMessages, pickerIcon, sendIcon } from './app.const';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('messageInput') messageInput: ElementRef<HTMLTextAreaElement> | undefined = undefined;
  message = '';
  messages: string[] = [];
  showPicker = false;
  pickerIcon = pickerIcon;
  sendIcon = sendIcon;

  constructor(private sanitizer: DomSanitizer) {}

  sendMessage() {
    if (this.message.trim()) {
      console.log(this.message);
      this.messages.push(this.message);
      this.message = '';
    }
    this.messageInput?.nativeElement.focus();
  }

  keyDownEnter(event: any) {
    event.preventDefault();
    if (!event.shiftKey) {
      this.sendMessage();
    }
  }

  getSafeSvg(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  ngOnInit() {
    // Laden der Dummy-Nachrichten beim Initialisieren
    this.messages = [...dummyMessages];
  }
}
