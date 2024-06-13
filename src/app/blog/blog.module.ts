import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './component/blog.component';
import { HeaderModule } from '../shared/header/header.module';
import { MenuModule } from '../shared/menu/menu.module';
import { FooterModule } from '../shared/footer/footer.module';
import { MobileFooterModule } from '../shared/mobile-footer/mobile-footer.module';
import { IonicModule } from '@ionic/angular';
import { SlideBlogComponent } from './slide-blog/slide-blog.component';
import { BodyBlogComponent } from './body-blog/body-blog.component';
import { TapeModule } from '../shared/tape/tape.module';
import { MobileBodyHeaderModule } from '../shared/mobile-body-header/mobile-body-header.module';
import { DesktopBodyHeaderModule } from '../shared/desktop-body-header/desktop-body-header.module';


@NgModule({
  declarations: [
    BlogComponent,
    SlideBlogComponent,
    BodyBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HeaderModule,
    MenuModule,
    FooterModule,
    MobileFooterModule,
    IonicModule,
    TapeModule,
    MobileBodyHeaderModule,
    DesktopBodyHeaderModule
  ]
})
export class BlogModule { }
