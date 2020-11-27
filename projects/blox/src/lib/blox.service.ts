import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BloxService {

    constructor() { };

    public rowId: string;
    public resize: string;
    public editing: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public columnId: string;

}