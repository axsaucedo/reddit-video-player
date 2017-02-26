import { Routes, RouterModule } from '@angular/router';

import { RedditVideoRoutes } from './redditvideo/index';

const appRoutes: Routes = [
    ...RedditVideoRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
