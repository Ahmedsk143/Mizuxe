import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TipsComponent } from './tips/tips.component';
import { AboutComponent } from './about/about.component';
import { AuthorsComponent } from './authors/authors.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShowcaseComponent,
    SubscribeComponent,
    TipsComponent,
    AboutComponent,
    AuthorsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
