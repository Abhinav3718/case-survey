import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "./data-populate.service";
import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class RouteGuard implements CanActivate {
    constructor(private dataService: DataService) {}
    canActivate(): boolean {
        return this.dataService.isSelectedSurgeryTypeValid();
    }

}