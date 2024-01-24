export class Surgery {
    id!: number;
    name!: string;
}

export enum SurgeryTypes {
    RIRS = "Retrograde intrarenal surgery",
    FISTULA = "AV Fistula"
}