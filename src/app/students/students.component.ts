import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { studentinterface } from './studentinterface'
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
dataSource:any;
displayedColumns:string[]=['id','name','email','age']
  constructor(private http: HttpClient,private asd:ChangeDetectorRef) { }

  ngOnInit(): void {this.load();
  }
load():void{
 this.http.get<studentinterface[]>('http://localhost:8080/student/getall').subscribe(data=>{this.dataSource=data;this.asd.detectChanges();})
}
}
