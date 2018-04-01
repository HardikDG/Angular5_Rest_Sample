import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

import { HttpErrorResponse } from '@angular/common/http';
import { Sample } from './sample';

@Component({
  selector: 'app-sample-call',
  templateUrl: './sample-call.component.html',
  styleUrls: ['./sample-call.component.css'],
  providers:[SampleService]
})
export class SampleCallComponent implements OnInit {

  constructor(private sampleService:SampleService) { }

  ngOnInit() {
    // this.sampleService.getHeroes().subscribe((result)=> {
    //   console.log(result[0]);
    // },
    // (err: HttpErrorResponse) => {

    //   if (err.error instanceof Error) {
    //     console.log("Client-side error occured.");
    //   } else {
    //     console.log("Server-side error occured.");
    //   }
    // })

    this.sampleService.getHeroes().subscribe((result)=> {
      console.log(result[0]);
    },
    (err) => {
      console.log(err);
    })

    this.addSample();
  }

  addSample() {
    const newObj: Sample = {}  as Sample;
    this.sampleService.addHero(newObj).subscribe((result) => {
      console.log(result);
    })
  }

}
