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
    placeHolder?: string;
    formGroupName?: string;
    formArrayName?: string;
}

export enum InputTypesCss {

}

export const INTRA_OPERATIVE_FINDINGS: Types[] = [
    {
        name: "Type of Laser",
        options: ["HOL", "TFL"],
        type: InputTypes.Radio,
        controlName: 'laser_type',
        formGroupName: 'laser_type_group'
    },
    {
        name: "Access Sheath Size",
        options: null,
        type: InputTypes.TextBox,
        controlName: 'sheath_size',
        placeHolder: 'in mm'
    },
    {
        name: "How is Ureter?",
        options: ["Accommodable", "Difficult Access Sheath placement", "Narrow & Tight"],
        type: InputTypes.Radio,
        controlName: 'ureter',
        formGroupName: 'ureter_group'
    },
    {
        name: "Bilateral or single side?",
        options: ["Bilateral", "Single side"],
        type: InputTypes.Radio,
        controlName: 'spec',
        formGroupName: 'spec_group'
    },
    {
        name: "Signs of infection, if any?",
        options: ["Yes", "No"],
        type: InputTypes.Radio,
        controlName: 'infection_sign',
        formGroupName: 'infection_sign_group'
    },
    {
        name: "Duration of Laser",
        options: null,
        type: InputTypes.TextBox,
        controlName: 'duration',
        placeHolder: 'in minutes'
    },
    {
        name: "Laser Settings",
        options: ["Frequency", "Energy"],
        type: InputTypes.Checkbox,
        controlName: 'settings',
        formArrayName: 'settings_array'
    },
    {
        name: "Any residual stone on Fluoroscopy?",
        options: ["Yes", "No"],
        type: InputTypes.Radio,
        controlName: 'residual_stone',
        formGroupName: 'residual_stone_group'
    },
    {
        name: "Intraoperative videos/pictures?",
        options: ["Yes", "No"],
        type: InputTypes.Radio,
        type2: InputTypes.File,
        controlName: 'media',
        formGroupName: 'media_group'
    },
    {
        name: "Intraoperative vitals",
        options: ["Pulse rate", "BP", "SpO2"],
        type: InputTypes.Checkbox,
        controlName: 'vitals',
        formArrayName: 'vitals_array'
    },
    {
        name: "Post procedure stunt size",
        options: null,
        type: InputTypes.TextBox,
        controlName: 'stunt_size',
        placeHolder: 'in mm'
    }
]

