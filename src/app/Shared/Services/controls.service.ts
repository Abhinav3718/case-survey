import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable()
export class ControlsService {
    constructor(private fb: FormBuilder) {}

    GetFormGroupWithCheckBoxControl(data: any[], controlName: string) {
        let checkboxControl = this.getCheckBoxControl(data, controlName);
        return this.fb.group(checkboxControl);
    }

    private getCheckBoxControl(data: any[], controlName: string) {
        let obj: any = {};
        obj[controlName]= this.fb.array(data.map((element: any) => false));
        return obj;
    }

    GetFormGroupWithRadioControl(data: any[], controlName: string) {
        let checkboxControl = this.getRadioControl(data, controlName);
        return this.fb.group(checkboxControl);
    }

    private getRadioControl(data: any[], controlName: string) {
        let obj: any = {};
        obj[controlName]= ['', Validators.required];
        return obj;
    }
}