import { Injectable } from '@angular/core';


@Injectable()
export class ConfigService {

    private serverBackend: string;

	/////////////////
	// Constructor //
	/////////////////
    public constructor() {

        this.serverBackend = 'http://localhost:3000/api';

    }

	/////////////
	// Getters //
	/////////////
    public getServerBackend(): string {

        return this.serverBackend;

    }

	/////////////
	// Setters //
	/////////////
    public setServerBackend(serverBackend: string): void {

        this.serverBackend = serverBackend;

    }

}
