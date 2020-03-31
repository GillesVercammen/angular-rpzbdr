import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MyFormModule } from "projects/be-payroll-core-test/src/public-api";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
