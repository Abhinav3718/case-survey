import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'rirs-surgery',
    styleUrls: ['./RIRS.component.css'],
    templateUrl: './RIRS.component.html'
})
export class RIRSComponent implements OnInit {
    constructor() {}

    enableCommorbities: boolean = false;
    
    ngOnInit(): void {
        
    }

    onUserDetailsEntered(isUserDetailsEntered: any) {
        this.enableCommorbities = isUserDetailsEntered;
    }
}