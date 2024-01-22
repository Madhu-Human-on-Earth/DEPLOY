import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SIGNINComponent } from './EDU_GFG/signin/signin.component';
import { DirectionalLightComponent } from './EDU_GFG/directional-light/directional-light.component';
import { AmbientComponent } from './EDU_GFG/ambient/ambient.component';
import { CapsuleGeometryComponent } from './EDU_GFG/capsule-geometry/capsule-geometry.component';
import { TorusKComponent } from './EDU_GFG/torus-k/torus-k.component';
import { TorusComponent } from './EDU_GFG/torus/torus.component';
import { ConeComponent } from './EDU_GFG/cone/cone.component';
import { CylinderComponent } from './EDU_GFG/cylinder/cylinder.component';
import { SphereGeoComponent } from './EDU_GFG/sphere-geo/sphere-geo.component';
import { PrimitivesComponent } from './EDU_GFG/primitives/primitives.component';
import { InstallationComponent } from './EDU_GFG/installation/installation.component';
import { ThreeJsComponent } from './EDU_GFG/three-js/three-js.component';
import { VideoSectionComponent } from './EDU_GFG/video-section/video-section.component';
import { MainComponentComponent } from './EDU_GFG/main-component/main-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, matDialogAnimations } from '@angular/material/dialog';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PopupComponent } from './EDU_GFG/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CapsuleGeometryComponent,
    AmbientComponent,
    DirectionalLightComponent,
    SIGNINComponent,
  
    TorusComponent,
    TorusKComponent,
    ConeComponent,
    CylinderComponent,
    SphereGeoComponent,
    PrimitivesComponent,
    InstallationComponent,
    ThreeJsComponent,
    VideoSectionComponent,
    MainComponentComponent,
    PopupComponent


   
  ],
  // ...

    // ...

    // ...

    // ...

    // ...

    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
