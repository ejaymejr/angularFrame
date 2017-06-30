import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProjectComponent } from './components/project.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './notfound.component';


const appRouter : Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    },
];

export const Router : ModuleWithProviders = RouterModule.forRoot(appRouter);
