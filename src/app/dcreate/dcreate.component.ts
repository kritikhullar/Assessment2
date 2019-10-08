import { Component, OnInit } from '@angular/core';
import { Department } from '../Department';
import { DeptService }  from '../dept.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dcreate',
  templateUrl: './dcreate.component.html',
  styleUrls: ['./dcreate.component.css']
})
export class DcreateComponent implements OnInit {

  department = new Department();

  constructor(private ds:DeptService, private route:Router) { }

  ngOnInit() {
  }

  savedata():void
  {
    console.log(this.department)
    this.ds.save(this.department);
    this.route.navigate(['deptlist']);
  }

}
