import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";
import { ControlsService } from "../../Services/controls.service";

@Component({
    selector: 'radio',
    templateUrl: './radio-control.component.html'
})
export class RadioControlComponent implements OnInit, OnDestroy {
    @Input({required: true}) controlName!: string;
    @Input({required: true}) options!: any[];
    @Output() formResult = new EventEmitter<FormGroup>()

    myGroup!: FormGroup;
    subscription?: Subscription;

    constructor(private service: ControlsService) {}

    ngOnInit(): void {
        this.myGroup = this.service.GetFormGroupWithRadioControl(this.options, this.controlName);
        this.subscription = this.myGroup.valueChanges
        //.pipe(debounceTime(5000))
        .subscribe(data => {
            this.formResult.emit(this.myGroup)
        })
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }

    
} 