import { Component, OnInit } from '@angular/core';
import { Department } from '../Department';
import { DeptService } from '../dept.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {

  deptlist: Department[];
  department: Department;
  updateddiv =false;

  constructor(private ds:DeptService,private route:Router) {
    this.deptlist=this.ds.getdetails();
   }

  ngOnInit() {
  }

  modify(ind:number)
  {
    console.log("Index" + ind)
    this.updateddiv=true;
    this.department=this.deptlist[ind];
    this.ds.update(this.department, ind);
    
  }

  deletedata(ind:number)
  {
    console.log("Index" + ind)
    this.ds.delete(ind);
  }
}
