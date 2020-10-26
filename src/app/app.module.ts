import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { AuthInterceptorProvider } from './interceptors/auth.interceptors';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { CategoriaService } from './Service/Domain/categoria.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [
    AuthInterceptorProvider,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CategoriaService,
    JwtHelperService,
    ErrorInterceptorProvider,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
