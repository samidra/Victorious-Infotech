import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProductComponent } from './product/product.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
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



const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'Services',component:ServicesComponent},
  {path: 'About',component:AboutComponent},
  {path: 'Product',component:ProductComponent},
  {path: 'Work',component:WorkComponent},
  {path: 'Contact',component:ContactComponent},
  {path: 'webandcms', component:WebandcmsComponent},
  {path: 'cloud', component:CloudComponent},
  {path: 'Mobile', component:MobileComponent},
  {path: 'uiux', component:UiComponent},
  {path: 'Digitalmarket', component:DigitalmarketComponent},
  {path: 'career', component:CareersComponent},
  {path: 'Blog', component:BlogComponent},
  {path: 'Privacy', component:PrivacyComponent},
  {path: 'Term', component:TermsComponent},
  {path: 'Dashboard', component:DashboardComponent},
  {path: 'view', component:ViewComponent},
  {path: 'consulting', component:DigitalconsultingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
