import { Injectable } from '@angular/core';
import { Department } from './Department';

@Injectable({
  providedIn: 'root'
})
export class DeptService {
  deptlist:Department[]=[
    {deptid:1, deptname:'Engineering', groupname:'Research and Development', modifieddate: new Date},
    {deptid:2, deptname:'Tool Design', groupname:'Research and Development', modifieddate: new Date},
    {deptid:3, deptname:'Sales', groupname:'Sales and Marketing', modifieddate: new Date},
    {deptid:4, deptname:'Marketing', groupname:'Sales and Marketing', modifieddate: new Date},
    {deptid:5, deptname:'Purchasing', groupname:'Inventory Management', modifieddate: new Date},
    {deptid:6, deptname:'Research and Development', groupname:'Research and Development', modifieddate: new Date},
    {deptid:7, deptname:'Production', groupname:'Manufacturing', modifieddate: new Date},
    {deptid:8, deptname:'Production Control', groupname:'Manufacturing', modifieddate: new Date},
    {deptid:9, deptname:'Human Resources', groupname:'Executive General and Administration', modifieddate: new Date},
    {deptid:10, deptname:'Finance', groupname:'Executive General and Administration', modifieddate: new Date},
    {deptid:11, deptname:'Information Services', groupname:'Executive General and Administration', modifieddate: new Date},
    {deptid:12, deptname:'Document Control', groupname:'Quality Assurance', modifieddate: new Date},
    {deptid:13, deptname:'Quality Assurance', groupname:'Quality Assurance', modifieddate: new Date},
    {deptid:14, deptname:'Facilities and Maintenance', groupname:'Executive General and Administration', modifieddate: new Date},
    {deptid:15, deptname:'Shipping and Receiving', groupname:'Inventory Management', modifieddate: new Date},
    {deptid:16, deptname:'Executive', groupname:'Executive General and Administration', modifieddate: new Date}
  ];

  constructor() { }

  getdetails()
  {
    return this.deptlist;
  }

  save(dept:Department)
  {  
     this.deptlist.push(dept);
  }
 
  update(dept:Department,index:number)
  {
    this.deptlist[index]=dept;
  }
 
  delete(index:number)
  {
    this.deptlist.splice(index,1);
  }
}
