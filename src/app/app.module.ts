import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cabeza1Component } from './cabeza1/cabeza1.component';
import { Cabeza2Component } from './cabeza2/cabeza2.component';
import { Cabeza3Component } from './cabeza3/cabeza3.component';
import { Cuello1Component } from './cuello1/cuello1.component';
import { Cuello2Component } from './cuello2/cuello2.component';
import { Cuello3Component } from './cuello3/cuello3.component';
import { TroncosuperiorComponent } from './troncosuperior/troncosuperior.component';
import { TroncomedioComponent } from './troncomedio/troncomedio.component';
import { TroncoinferiorComponent } from './troncoinferior/troncoinferior.component';
import { ColaComponent } from './cola/cola.component';
import { EsofagoComponent } from './cuello1/esofago/esofago.component';
import { TraqueaComponent } from './cuello1/traquea/traquea.component';
import { GangliosComponent } from './cuello2/ganglios/ganglios.component';
import { MusculoscuelloComponent } from './cuello2/musculoscuello/musculoscuello.component';
import { VasossanguineosComponent } from './cuello3/vasossanguineos/vasossanguineos.component';
import { GlandulassalivalesComponent } from './cuello3/glandulassalivales/glandulassalivales.component';
import { CorazonComponent } from './troncosuperior/corazon/corazon.component';
import { PulmonesComponent } from './troncosuperior/pulmones/pulmones.component';
import { HigadoComponent } from './troncomedio/higado/higado.component';
import { EstomagoComponent } from './troncomedio/estomago/estomago.component';
import { IntestinosComponent } from './troncoinferior/intestinos/intestinos.component';
import { RinonesComponent } from './troncoinferior/rinones/rinones.component';
import { Ojos1Component } from './cabeza1/ojos1/ojos1.component';
import { Boca1Component } from './cabeza1/boca1/boca1.component';
import { Ojos2Component } from './cabeza2/ojos2/ojos2.component';
import { Boca2Component } from './cabeza2/boca2/boca2.component';
import { Ojos3Component } from './cabeza3/ojos3/ojos3.component';
import { Boca3Component } from './cabeza3/boca3/boca3.component';

@NgModule({
  declarations: [
    AppComponent,
    Cabeza1Component,
    Cabeza2Component,
    Cabeza3Component,
    Cuello1Component,
    Cuello2Component,
    Cuello3Component,
    TroncosuperiorComponent,
    TroncomedioComponent,
    TroncoinferiorComponent,
    ColaComponent,
    EsofagoComponent,
    TraqueaComponent,
    GangliosComponent,
    MusculoscuelloComponent,
    VasossanguineosComponent,
    GlandulassalivalesComponent,
    CorazonComponent,
    PulmonesComponent,
    HigadoComponent,
    EstomagoComponent,
    IntestinosComponent,
    RinonesComponent,
    Ojos1Component,
    Boca1Component,
    Ojos2Component,
    Boca2Component,
    Ojos3Component,
    Boca3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
