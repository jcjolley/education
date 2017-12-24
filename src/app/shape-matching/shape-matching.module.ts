import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShapeMatchingComponent } from './shape-matching/shape-matching.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ShapeMatchingService } from './shape-matching.service';
import { ShapeComponent } from './shape-matching/shape/shape.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShapeMatchingComponent, ShapeComponent]
})
export class ShapeMatchingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ShapeMatchingModule,
      providers: [ShapeMatchingService]
    }
  }
}
