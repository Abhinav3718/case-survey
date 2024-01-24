import { Injectable } from "@angular/core";
import { Storage } from "../Models/Storage";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() {}

    setStorage(name: Storage, value: any) {
        sessionStorage.setItem(name, value);
    }
}