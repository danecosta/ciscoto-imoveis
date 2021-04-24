import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { DetalharImovelComponent } from './components/detalhar-imovel/detalhar-imovel.component';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre-nos', component: SobreNosComponent },
    { path: 'detalhar-imovel', component: DetalharImovelComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
