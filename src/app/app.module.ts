import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './home/components/table/table.component';
import { TabsComponent } from './home/components/tabs/tabs.component';
import { HomeActions } from './home/home.actions';
import { LandingComponent } from './landing/landing.component';
import { SpinnerComponent } from './home/components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    TabsComponent,
    LandingComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HomeActions],
  bootstrap: [AppComponent],
})
export class AppModule {}
