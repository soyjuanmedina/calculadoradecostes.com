import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  step;
  project: Project = {
    type: '',
    name,
    esteemedCustomers: {
      esteemed: 0,
      commentary: '',
      averageTicket: 0,
      monthly: false
    },
    incomes: [],
    costs: {
      fixedcosts: [],
      variablescosts: []
    }
  };

  constructor(private http: HttpClient) {
  }

  saveProject(project: Project) {
    return this.http.post('/project/save', project).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

}
