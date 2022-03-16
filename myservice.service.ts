import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  Employees(){
    return[
      {id: 101, firstname: 'Jalen', lastname: 'Relativo', email:'jdrelativo@student.hau.edu.ph'},
      {id: 102, firstname: 'James', lastname: 'Atienza', email:'jatienza@student.hau.edu.ph'},
      {id: 103, firstname: 'John', lastname: 'Cena', email:'jcena@student.hau.edu.ph'},
      {id: 104, firstname: 'Robert', lastname: 'Quintana', email:'rquintana@student.hau.edu.ph'},
    ]
  }
}
