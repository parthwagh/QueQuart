import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
 
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'payment', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'confirmation', loadChildren: './confirmation/confirmation.module#ConfirmationPageModule' },
  { path: 'group', loadChildren: './group/group.module#GroupPageModule' },
  { path: 'account-info', loadChildren: './account-info/account-info.module#AccountInfoPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'my-tickets', loadChildren: './my-tickets/my-tickets.module#MyTicketsPageModule' },
  { path: 'my-groups', loadChildren: './my-groups/my-groups.module#MyGroupsPageModule' },
  { path: 'interests', loadChildren: './interests/interests.module#InterestsPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'group-detail', loadChildren: './group-detail/group-detail.module#GroupDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
