export class SurveryDetails {
    userDetails!: UserDetails;
    comorbidities?: Comorbidities;
}

export class UserDetails {
    name!: string;
    age!: string;
    sex!: string;
    contact!: string;
    address!: string;
}

export const HEALTH_CONDITIONS: string[] = ["Diabetes Mellitus", "Hypertension", "CAD (Cardiac)", "CVA", "Asthama", "Hypothyroidism"];
export const PRE_OPERATIVE_URINE = {
    name: "Pre-operative Urine C/S",
    isPositive: false,
    description: ""
}
export class Comorbidities {
    healthConditions?: string[];
    preOperativeUrine: any;
}

export const RadioSelectionValues = {
    Yes: "Positive",
    No: "Negative"
}

