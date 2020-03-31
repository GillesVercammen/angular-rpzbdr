import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfigOption, FormlyModule } from "@ngx-formly/core";
import { InputComponent } from "./form-input/input.component";
import { MyFormComponent } from "./form.component";
import { NgxMaskModule } from "ngx-mask";

export const FORM_CONFIG: ConfigOption = {
  types: [{ name: "text2", component: InputComponent }]
};

@NgModule({
  declarations: [InputComponent, MyFormComponent],
  exports: [MyFormComponent],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot(FORM_CONFIG),
    HttpClientModule,
    NgxMaskModule.forRoot()
  ]
})
export class MyFormModule {}
