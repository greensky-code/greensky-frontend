import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { GroupRoleVO } from '../shared/applicationBean';

@Component({
  selector: 'app-grouprole',
  templateUrl: './grouprole.component.html',
  styleUrls: ['./grouprole.component.css']
})
export class GrouproleComponent implements OnInit {
  groupRoleMst: GroupRoleVO[];
  constructor() { }

  ngOnInit() {
    this.groupRoleMst = [
      {
        group_id: 'G1',
        group_name: 'Group 1',
        group_desc: 'Group 1',
        status: 'Active'
      },
      {
        group_id: 'G2',
        group_name: 'Group 2',
        group_desc: 'Group 2',
        status: 'Active'
      },
      {
        group_id: 'G3',
        group_name: 'Group 3',
        group_desc: 'Group 3',
        status: 'Active'
      },
      {
        group_id: 'G4',
        group_name: 'Group 4',
        group_desc: 'Group 4',
        status: 'Active'
      },
      {
        group_id: 'G5',
        group_name: 'Group 5',
        group_desc: 'Group 5',
        status: 'Active'
      },
      {
        group_id: 'G6',
        group_name: 'Group 6',
        group_desc: 'Group 6',
        status: 'Active'
      }
    ];
  }
  addGroup(){
    this.groupRoleMst.push(new GroupRoleVO());
  }
  deleteGroup(index){
    var request = confirm("Are you sure you want to delete the record ?");
    if (request == true) {
      this.groupRoleMst.splice(index, 1);
    }
  }
  saveGroupMst(){
    console.log(this.groupRoleMst);
  }
  searchRecord() {
    $("#searchTxt1").on("keyup", function () {
      var value = $(this).val().toLowerCase().trim();
      $("#GrpMstTableContent tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

}
