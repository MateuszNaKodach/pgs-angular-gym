import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputTweetComponent } from './components/input-tweet/input-tweet.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { WallComponent } from './components/wall/wall.component';


@NgModule({
  declarations: [
    AppComponent,
    InputTweetComponent,
    TweetComponent,
    WallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
