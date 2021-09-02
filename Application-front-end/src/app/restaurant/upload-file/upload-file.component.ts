import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import {ResServiceService} from "src/app/restaurant/res-service.service"
import { HttpClient, HttpHeaders, HttpEventType, HttpResponse } from '@angular/common/http'
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  URL_API = "http://127.0.0.1:8000/api"


  FormData = new FormData();
  fileName = '';
  uploadProgress:number =0;
  uploadSub: any;
  @Input() image:any
  @Output() sendImages:EventEmitter<any> = new EventEmitter()


  SOURCE_PATH_IMAGE ="http://127.0.0.1:8000/images/"
  default_image = "/assets/foods_logo.jpg"

  constructor(private __http: HttpClient) { }

  ngOnInit(): void {
  }

  file = ""

  onFileSelected($event:any){
      this.FormData.append('image', $event.target.files[0]);
     const upload$ = this.__http.post(`${this.URL_API}/upload`,this.FormData, 
      {
          reportProgress: true,
          observe: 'events'})
              .pipe(
                finalize(() => this.reset())
              );
            this.uploadSub = upload$.subscribe(event => {
              if(event instanceof HttpResponse){
                this.image
                this.sendImages.emit(event?.body)
              }
              let total:any = 0
              if(event){
                if (event?.type == HttpEventType.UploadProgress) {
                  total = event?.total
                this.uploadProgress = Math.round(100 * (event!.loaded / total));
              }
              }
            })
            // this.file = upload$

      }


  cancelUpload() {

    this.uploadSub?.unsubscribe();
    this.reset();
  }
  reset() {
    this.uploadProgress = 0;
    console.log(this.file)
    this.uploadSub = null;
  }

}
