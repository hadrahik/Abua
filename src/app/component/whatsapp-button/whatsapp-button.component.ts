import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css']
})
export class WhatsappButtonComponent {
  abrirWhatsApp() {
    const numeroWhatsApp = '3122536222';
    window.open(`https://wa.me/${numeroWhatsApp}`, '_blank');
  }
}

