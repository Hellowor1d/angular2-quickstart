import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// Imports for loading & configuring the in-memory web api 为了模拟http请求获取英雄数据列表
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroService }          from './hero.service';


import { TitleComponent }       from './title.component';
import { HighlightDirective }   from './highlight.directive';
import { UserService }          from './user.service' ; 

import { AwesomePipe }          from './contact/awesome.pipe';
import { ContactComponent }     from './contact/contact.component';
import { HighlightDirective as ContactHighlightDirective}     from './contact/highlight.directive';
import { ContactService }       from './contact/contact.service';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
     BrowserModule,
     FormsModule,
     AppRoutingModule,
     HttpModule,
     InMemoryWebApiModule.forRoot(InMemoryDataService),

   ],
  declarations: [
     AppComponent,
     DashboardComponent,
     HeroDetailComponent,
     HeroesComponent,
     HighlightDirective,
     TitleComponent,
     AwesomePipe,
     ContactComponent,
     ContactHighlightDirective

   ],
   providers: [
    HeroService,
    ContactService,
    UserService
  ],
  bootstrap:  [
     AppComponent
   ]
})
export class AppModule { }
