import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { MInfoComponent } from './component/m-info/m-info.component';
import { SliderComponent } from './component/slider/slider.component';
import { ContactComponent } from './component/contact/contact.component';
import { WhatsappButtonComponent } from './component/whatsapp-button/whatsapp-button.component';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ScrollService } from './services/scroll.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    MInfoComponent,
    SliderComponent,
    ContactComponent,
    WhatsappButtonComponent,
    ProductFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
