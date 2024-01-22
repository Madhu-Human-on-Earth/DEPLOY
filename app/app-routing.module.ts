import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SIGNINComponent } from './EDU_GFG/signin/signin.component';
import { DirectionalLightComponent } from './EDU_GFG/directional-light/directional-light.component';
import { AmbientComponent } from './EDU_GFG/ambient/ambient.component';
import { CapsuleGeometryComponent } from './EDU_GFG/capsule-geometry/capsule-geometry.component';
import { TorusComponent } from './EDU_GFG/torus/torus.component';
import { TorusKComponent } from './EDU_GFG/torus-k/torus-k.component';
import { ConeComponent } from './EDU_GFG/cone/cone.component';
import { CylinderComponent } from './EDU_GFG/cylinder/cylinder.component';
import { PrimitivesComponent } from './EDU_GFG/primitives/primitives.component';
import { SphereGeoComponent } from './EDU_GFG/sphere-geo/sphere-geo.component';
import { InstallationComponent } from './EDU_GFG/installation/installation.component';
import { ThreeJsComponent } from './EDU_GFG/three-js/three-js.component';
import { VideoSectionComponent } from './EDU_GFG/video-section/video-section.component';
import { MainComponentComponent } from './EDU_GFG/main-component/main-component.component';
import { PopupComponent } from './EDU_GFG/popup/popup.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:MainComponentComponent},
  {path:'installation',component:InstallationComponent},
  {path:'primitives',component:PrimitivesComponent},

    
{path:'box',component:PrimitivesComponent},
  {path:'sphere',component:SphereGeoComponent},
  {path:'three',component:ThreeJsComponent},
  {path:'cylinder',component:CylinderComponent},
  // {path:'contact',component:ContactFormComponent},
  {path:'cone',component:ConeComponent},
  {path:'torus',component:TorusComponent},
  {path:'torusK',component:TorusKComponent},
  {path:'capsule',component:CapsuleGeometryComponent},
  {path:'ambient', component:AmbientComponent},
  {path:'directional',component:DirectionalLightComponent},
  {path:'signin',component:SIGNINComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
