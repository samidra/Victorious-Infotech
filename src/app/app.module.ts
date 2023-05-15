import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebandcmsComponent } from './webandcms/webandcms.component';
import { CloudComponent } from './cloud/cloud.component';
import { MobileComponent } from './mobile/mobile.component';
import { UiComponent } from './ui/ui.component';
import { DigitalmarketComponent } from './digitalmarket/digitalmarket.component';
import { CareersComponent } from './careers/careers.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { DigitalconsultingComponent } from './digitalconsulting/digitalconsulting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProductComponent,
    WorkComponent,
    ContactComponent,
    WebandcmsComponent,
    CloudComponent,
    MobileComponent,
    UiComponent,
    DigitalmarketComponent,
    CareersComponent,
    BlogComponent,
    PrivacyComponent,
    TermsComponent,
    DashboardComponent,
    ViewComponent,
    DigitalconsultingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CdkAccordionModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
