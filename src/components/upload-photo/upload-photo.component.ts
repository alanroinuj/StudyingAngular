import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent implements OnInit {

  files: File[] = [];
  imgbase64: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    //console.log(event);
    this.files.push(...event.addedFiles);
    this.files.forEach((data) =>{
      this.convertBaseTo64(data)
    })
  }


  convertBaseTo64(file: File){
    this.imgbase64 = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    this.imgbase64.subscribe((data) => {
      console.log(data);
    })
  }

  readFile(file: File, subscriber: Subscriber<any>){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    }
    fileReader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    }
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


}
