import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "my-form",
  templateUrl: "./form.component.html"
})
export class MyFormComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "name",
      type: "text2",
      templateOptions: {
        label: "Name",
        placeholder: "namePlaceholder",
        required: true
      }
      // expressionProperties: {
      //   'templateOptions.placeholder': () => 'namePlaceholder',
      // },
    }
  ];
}
