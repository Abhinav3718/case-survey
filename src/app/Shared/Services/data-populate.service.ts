import { Injectable } from "@angular/core";
import { Surgeries } from "../Data/surgery-json";
import { Surgery, SurgeryTypes } from "../Models/Surgery";
import { Router } from "@angular/router";
import { GenderData } from "../Data/gender-json";
import { Gender } from "../Models/Gender";
import { UserDetails } from "../Models/SurveyDetails";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private surgeryTypes: Surgery[];
    private genders: Gender[];

    private userDetails!: UserDetails;

    constructor(private route: Router) {
        this.surgeryTypes = Surgeries;
        this.genders = GenderData;
    }

    private selectedSurgeryType?: Surgery;

    GetSurgeryTypes(): Surgery[] {
        return this.surgeryTypes;
    }

    GetGenders(): Gender[] {
        return this.genders;
    }

    setSelectedSurgery(surgery: any) {
        let detail = Surgeries.find((r: Surgery) => r.id == surgery);
        this.selectedSurgeryType = detail;
    }

    isSelectedSurgeryTypeValid(): boolean {
        return this.selectedSurgeryType != undefined && Surgeries.filter((r: Surgery) => r?.id == this.selectedSurgeryType?.id)?.length > 0;
    }

    navigate(surgeryType: string | undefined) {
        if(surgeryType) {
            switch(surgeryType) {
                case SurgeryTypes.RIRS : {
                  this.route.navigateByUrl('rirs');
                  break;
                }
                case SurgeryTypes.FISTULA : {
                  this.route.navigateByUrl('fistula');
                  break;
                }
                default: break;
              }
        }

        else {
            this.selectedSurgeryType = undefined;
            this.route.navigateByUrl('');
        }
    }

    setUserDetails(userDetails: UserDetails) {
        this.userDetails = userDetails;
    }
}