import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {counterReducer} from "../reducers/counter.reducer";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.forRoot({count: counterReducer}),
        StoreDevtoolsModule.instrument({
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
