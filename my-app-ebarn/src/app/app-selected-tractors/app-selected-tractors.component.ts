import { map, catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { TractorsService } from '../services/tractors.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
declare var $: any;

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-selected-tractors',
  templateUrl: './app-selected-tractors.component.html',
  styleUrls: ['./app-selected-tractors.component.css']
})


export class AppSelectedTractorsComponent implements OnInit {
  sucessCreate: string;
  errorAction: string;
  check: boolean;
  errorHttp: boolean;
  displayedColumns: string[] = ['position', 'Nome Trator', 'Model Trator', 'imagem'];
  ELEMENT_DATA: any;
  alterForm: FormGroup;
  crudUpdateTractor: any;
  constructor(private formBuild: FormBuilder, private tractorServices: TractorsService) { }

  ngOnInit(): void {
    console.log(this.errorHttp)
    this.alterForm = this.formBuild.group({
      id: ['', Validators.required],
      nameTractors: ['', Validators.required],
      modelTractors: ['', Validators.required]
    })
    this.searchAllTractors()
  }

  searchAllTractors() {
    this.tractorServices.searchAllTractors().subscribe((data) => {
      console.log('app-selected: ', data.body.dados);
      if (data.status === 200) {
        this.ELEMENT_DATA = data.body.dados;
        localStorage.setItem('tractors', this.ELEMENT_DATA);
      } else {
        this.check = false;
      }
    });
  }

  deleteTractors(item) {
    console.log(event)
    this.tractorServices.deleteTractors(item).subscribe((data) => {
      console.log('testando: ', data);
      if (data.status === 200) {
        this.ELEMENT_DATA = this.ELEMENT_DATA.filter(x => x.id != item.id);
        localStorage.setItem('tractors', this.ELEMENT_DATA);
        this.sucessCreate = data.body.msg;
        this.check = true;
      }
    }, error => {
      if (error.status === 404) {
        this.errorHttp = true;
        console.log(this.errorHttp);
        this.check = false;
        this.errorAction = error.error.msg;
        setInterval(() => {

          this.errorHttp = false;
        }, 3500);
        //this.errorHttp = false;

      }
    });
  }
  searchTractorForUpdate(item) {
    console.log(item)
    this.crudUpdateTractor = item
    console.log(this.crudUpdateTractor);
  }
  updateTractors() {
    if (this.alterForm.invalid) return;
    //{ dados: this.createform, img: this.url }
    console.log(this.alterForm)
    this.tractorServices.updateTractors(this.alterForm).subscribe((data) => {
      console.log('app-update: ', data.body);
      if (data.status === 200) {
        this.sucessCreate = data.body.msg;
        this.check = true;
        $('#alterarModal').modal('hide');
        this.ELEMENT_DATA.map(x => {
          if (x.id === this.alterForm.value.id) {
            x.nameTractors = this.alterForm.value.nameTractors;
            x.modelTractors = this.alterForm.value.modelTractors;
            console.log('dados depois de alterar: ', x);
            return x;
          }

        })
        localStorage.setItem('tractors', this.ELEMENT_DATA);
      } else {
        this.check = false;
      }
    });
  }
  deleteAllTractors() {
    this.tractorServices.deleteAllTractors().subscribe((data) => {
      console.log('testando: ', data);
      if (data.status === 200) {
        this.sucessCreate = data.body.msg;
        this.check = true;
        this.ELEMENT_DATA = []
        localStorage.setItem('tractors', this.ELEMENT_DATA);
        $('#deletarModal').modal('hide');
        setInterval(() => {

          this.check = false;
        }, 3500);
      }
    }, error => {
      if (error.status === 404) {
        this.errorHttp = true;
        console.log(this.errorHttp);
        this.check = false;
        this.errorAction = error.error.msg;
        $('#deletarModal').modal('hide');

        setInterval(() => {

          this.errorHttp = false;
        }, 3500);
        //this.errorHttp = false;

      }
    });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if (error.status === 404) {
        this.errorHttp = true;
        this.check = false;
        console.log(this.errorHttp)
        this.errorAction = error.error.msg;
      }
      console.log('back END: ', error)
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
