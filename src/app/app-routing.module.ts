import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { SeccionUnoComponent } from './seccion-uno/seccion-uno.component';
import { SeccionDosComponent } from './seccion-dos/seccion-dos.component';
import { SeccionTresComponent } from './seccion-tres/seccion-tres.component';
import { SeccionCuatroComponent } from './seccion-cuatro/seccion-cuatro.component';

const routes: Routes = [
  { path: '', component: SeccionUnoComponent },
  { path: 'PrimeraSeccion', component: SeccionUnoComponent },
  { path: 'SegundaSeccion', component: SeccionDosComponent },
  { path: 'TerceraSeccion', component: SeccionTresComponent },
  { path: 'CuartaSeccion', component: SeccionCuatroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
