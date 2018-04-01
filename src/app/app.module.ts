import { MessageService } from './http-handlers/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HttpErrorHandler }     from './http-handlers/http-error-handler.service';

import { httpInterceptorProviders } from './http-handlers/http-interceptors/index';
import { SampleCallComponent } from './sample-call/sample-call.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleCallComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [AuthService,HttpErrorHandler,httpInterceptorProviders,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
