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

export enum InputTypes {
    Checkbox = "checkbox",
    Radio = "radio",
    TextBox = "text",
    File = "file"
}

export class Types {
    name!: string;
    options?: string[] | null;
    type?: InputTypes;
    type2?: InputTypes;
    controlName!: string;
}

export const INTRA_OPERATIVE_FINDINGS: Types[] = [
    {
        name: "Type of Laser",
        options: ["HOL", "TFL"],
        type: InputTypes.Radio,
        controlName: 'laser_type'
    },
    {
        name: "Access Sheath Size",
        options: null,
        type: InputTypes.TextBox,
        controlName: 'sheath_size'
    },
    {
        name: "How is Ureter?",
        options: ["Accommodable", "Difficult Access Sheath placement", "Narrow & Tight"],
        type: InputTypes.Radio,
        controlName: 'ureter'
    },
    {
        name: "Bilateral or single side?",
        options: ["Bilateral", "Single side"],
        type: InputTypes.Radio,
        controlName: 'spec'
    },
    {
        name: "Signs of infection, if any?",
        options: ["Yes", "No"],
        type: InputTypes.Radio,
        controlName: 'infection_sign'
    },
    {
        name: "Duration of Laser (in min)",
        options: null,
        type: InputTypes.TextBox,
        controlName: 'duration'
    },
    {
        name: "Laser Settings",
        options: ["Frequency", "Energy"],
        type: InputTypes.TextBox,
        controlName: 'settings'
    },
    {
        name: "Any residual stone on Fluoroscopy?",
        options: ["Yes", "No"],
        type: InputTypes.Radio,
        controlName: 'residual_stone'
    },
    {
        name: "Intraoperative videos/pictures?",
        options: ["Yes", "No"],
        type: InputTypes.Radio,
        type2: InputTypes.File,
        controlName: 'media'
    },
    {
        name: "Intraoperative vitals",
        options: ["Pulse rate", "BP", "SpO2"],
        type: InputTypes.TextBox,
        controlName: 'vitals'
    },
    {
        name: "Post procedure stunt size",
        options: null,
        type: InputTypes.TextBox,
        controlName: 'stunt_size'
    }
]

