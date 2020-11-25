import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class BloxService {

    constructor() { };

    public rowId: string;
    public resize: string;
    public columnId: string;

}