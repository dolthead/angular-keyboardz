import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { dummyMessages } from './app.const';

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

  constructor(private sanitizer: DomSanitizer) {
    console.log(1);
  }

  sendMessage() {
    if (this.message.trim()) {
      console.log(this.message);
      this.messages.push(this.message);
      this.message = '';
    }
    this.setFocus();
  }
  
  setFocus() {
    this.messageInput?.nativeElement.focus();
  }

  togglePicker() {
    this.showPicker = !this.showPicker;
    this.setFocus();
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
