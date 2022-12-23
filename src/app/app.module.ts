import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OwlModule } from 'ngx-owl-carousel';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { PersonalLoanComponent } from './services/personal-loan/personal-loan.component';
import { MortgageComponent } from './services/mortgage/mortgage.component';
import { BussinessComponent } from './services/bussiness/bussiness.component';
import { TradeFinanceComponent } from './services/trade-finance/trade-finance.component';
import { BusinessAccountComponent } from './services/business-account/business-account.component';


const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent },
  {path:'contactus', component: ContactusComponent},
  {path:'services', component:ServicesComponent },
  {path:'personal-loan', component: PersonalLoanComponent},
  {path: 'mortgage-loan', component: MortgageComponent},
  {path: 'busienss-loan', component: BussinessComponent},
  {path: 'trade_finance', component: TradeFinanceComponent},
  {path:'business_account', component: BusinessAccountComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FooterComponent,
    ServicesComponent,
    ContactusComponent,
    HeaderComponent,
    PersonalLoanComponent,
    MortgageComponent,
    BussinessComponent,
    TradeFinanceComponent,
    BusinessAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    OwlModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
