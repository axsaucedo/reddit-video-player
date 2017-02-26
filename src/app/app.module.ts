import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { RedditVideoModule } from './redditvideo/redditvideo.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        RedditVideoModule,
        routing,
    ],
    providers: [ APP_PROVIDERS, appRoutingProviders ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
