import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: 'my-app',
  template: `
  <div fxLayout="row"
     class="container">
    <div class="block"
         fxFlexOffset="5"
         fxFlexAlign="flex-start">
    </div>
    <div class="block"
         fxFlexOffset="5"
         fxFlexAlign="flex-end">
    </div>
    <div class="block"
         fxFlexOffset="5"
         fxFlexAlign="center">
    </div>
    <div class="block"
         fxFlexOffset="5"
         fxFlexAlign="baseline">
    </div>
    <div  style="background-color: red"
          class="block"
         fxFlexOffset="5"
         fxFlexAlign="stretch"
         fxFlexFill>
    </div>

</div>
`,
  styles: [`
    .container {
      border: solid 1px #b6b6b6;
      background: skyblue;
      height: 200px;
      width: 100%;
    }
    
    .block {
      background-color: blue;
      min-height: 20px;
      min-width: 20px;
    }`
  ]
})

export class AppComponent {
 
}

@NgModule({
  imports: [ 
    BrowserModule,
    FlexLayoutModule
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}