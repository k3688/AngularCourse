import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admincomps/admin/admin.component';
import { Admin1Component } from './admincomps/admin1/admin1.component';
import { Admin2Component } from './admincomps/admin2/admin2.component';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './homecomps/home/home.component';
import { Home1Component } from './homecomps/home1/home1.component';
import { Home2Component } from './homecomps/home2/home2.component';
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { DirectivaDirective } from './test3/directiva.directive';
import { Directive2Directive } from './test3/directive2.directive';
import { Test3Component } from './test3/test3.component';
import { View1Component } from './view1/view1.component';
import { View1subComponent } from './view1/view1sub1/view1sub.component';
import { View1sub2Component } from './view1/view1sub2/view1sub2.component';
import { View2Component } from './view2/view2.component';

const routes:Routes = [{
  path: '', redirectTo: 'view1', pathMatch: 'full'
},
{
  path: 'view1', component: View1Component,
  children: [
    {
      path: '', redirectTo: 'view1sub1', pathMatch: 'full'
    },
    {
      path: 'view1sub1', component: View1subComponent,
    },
    {
      path: 'view1sub2', component: View1sub2Component,
    }
  ]
},
{
  path: 'view2/:id/sub/:id2', component: View2Component
},
{
  path: 'view3', loadChildren: () => import('./view3/view3.module').then(m => m.View3Module)
},
{
  path: 'home', component: HomeComponent,
  children: [
    {
      path: '', redirectTo: 'home1', pathMatch: 'full'
    },
    {
      path: 'home1', component: Home1Component,
    },
    {
      path: 'home2', component: Home2Component,
    }
  ]
},
{
  path: 'admin', component: AdminComponent,
  children: [
    {
      path: '', redirectTo: 'admin1', pathMatch: 'full'
    },
    {
      path: 'admin1', component: Admin1Component,
    },
    {
      path: 'admin2', component: Admin2Component,
    }
  ]
},
{
  path: 'h0me', loadChildren: () => import('./h0me/h0me.module').then(m => m.H0meModule)
},
{
  path: 'adm1n', loadChildren: () => import('./adm1n/adm1n.module').then(m => m.Adm1nModule)
}
];

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    DirectivaDirective,
    Directive2Directive,
    View1Component,
    View2Component,
    View1sub2Component,
    View1subComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    AdminComponent,
    Admin1Component,
    Admin2Component
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    CoreModule,
    SharedModule,
    RouterModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
