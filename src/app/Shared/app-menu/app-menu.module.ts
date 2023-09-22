import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AppMenuComponent } from "./app-menu.component";


@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [AppMenuComponent],
    exports: [AppMenuComponent]
  })
  export class AppMenuComponentModule {}