import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'rirs-surgery',
    styleUrls: ['./RIRS.component.css'],
    templateUrl: './RIRS.component.html'
})
export class RIRSComponent implements OnInit {
    constructor() {}

    enableCommorbities: boolean = false;
    enableDiagnosis: boolean = false;
    
    ngOnInit(): void {
        
    }

    onUserDetailsEntered(isUserDetailsEntered: any) {
        this.enableCommorbities = isUserDetailsEntered;
    }

    onComorbitiesDetailsEntered(comorbitiesDetails: {}[] | undefined) {
        if(comorbitiesDetails && comorbitiesDetails.length > 0) {
            this.enableDiagnosis = true;
        }
    }
}