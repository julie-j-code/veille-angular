// le service destiné à être importé n'a pas besoin en théorie du décorateur. on pourrait le déclarer dans le service qui l'importe comme provider

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logMessage(name: string, status: string) {
    console.log(`A new user with username : ${name} has been added, with the status : ${status}`)
  }

}
