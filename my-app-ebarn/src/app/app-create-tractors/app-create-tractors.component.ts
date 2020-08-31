import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { TractorsService } from '../services/tractors.service';
import * as img from '../../assets/imgDefault.json';


@Injectable()
@Component({
  selector: 'createTractors',
  templateUrl: './app-create-tractors.component.html',
  styleUrls: ['./app-create-tractors.component.css']
})

export class AppCreateTractorsComponent implements OnInit {
  sucessCreate: string;
  check: boolean;
  createform: FormGroup;
  submitted = false;
  testaURL: string = "valtra01.jpg";
  url: string = "assets/valtra01.jpg";
  fileUploadefault: File;
  constructor(private formBuild: FormBuilder, private tractorServices: TractorsService) { }
  ngOnInit() {
    //console.log('IMG: ', img[0].img)

    this.createform = this.formBuild.group({
      nameTractors: ['', Validators.required],
      modelTractors: ['', Validators.required]
    })

  }
  get acess() { return this.createform.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.createform)
    if (this.createform.invalid) return;
    //console.log('IMG: ', img[0].img)
    if (this.url === 'assets/valtra01.jpg') {
      this.url = img[0].img;
    }
    this.tractorServices.saveTractors({ dados: this.createform, img: this.url }).subscribe((data) => {
      console.log('app-create: ', data);
      if (data.status === 200) {
        this.sucessCreate = data.body.msg;
        this.check = true;
        setInterval(() => {
          this.onReset()
          location.reload();
        }, 1000)
        location.reload();
      } else {
        this.check = false;
      }
    });
    //alert('SUCCESS' + JSON.stringify(this.createform.value, null, 4) + ' - ' + this.url)
  }
  fileChangeDefault(event) {
    if (event.length > 0) {
      this.fileUploadefault = event;
      console.log(this.fileUploadefault)
      let file = new FileReader();
      console.log(event)

      file.readAsDataURL(this.fileUploadefault);
      file.onload = (event: any) => {
        console.log(event)
        this.url = event.target.result
      }
    }
  }
  fileChange(event) {
    if (event.target.files.length > 0) {
      let file = new FileReader();
      console.log(event.target.files[0])
      file.readAsDataURL(event.target.files[0]);
      file.onload = (event: any) => {
        this.url = event.target.result
        console.log(this.url)
      }
    }
  }
  onReset() {
    this.submitted = false;
    this.createform.reset();
  }
}
