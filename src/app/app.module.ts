import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
        imports: [
        RouterModule.forRoot(routes),
        CommonModule,
       ],
})

export class AppRoutingModule {}