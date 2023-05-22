import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderModule } from 'primeng/slider';
import { PasswordModule } from 'primeng/password';
import { Checkbox, CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemComponent } from './components/item/item.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SpecialsComponent } from './pages/specials/specials.component';
import { LoginComponent } from './pages/login/login.component';
import { ChefsComponent } from './pages/chefs/chefs.component';
import { Toast, ToastModule } from 'primeng/toast';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RegisterComponent } from './pages/register/register.component';
import { StepsModule } from 'primeng/steps';
import { OrderbookComponent } from './pages/orderbook/orderbook.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ItemComponent,
    HomepageComponent,
    AboutComponent,
    MenuComponent,
    SpecialsComponent,
    LoginComponent,
    ChefsComponent,
    MainpageComponent,
    RegisterComponent,
    OrderbookComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    HttpClientModule,
    SliderModule,
    PasswordModule,
    CheckboxModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule,
    StepsModule,
    InputTextareaModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
