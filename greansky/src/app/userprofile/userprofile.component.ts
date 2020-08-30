import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SecurityVO, GroupRoleVO, UserTypeVO, LocationVO } from '../shared/applicationBean';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  securityList: SecurityVO[];
  securityObj: SecurityVO;
  userTypeMst: UserTypeVO[];
  locationMst: LocationVO[];
  groupRoleMst: GroupRoleVO[];
  isDisplayScreen: boolean = true;

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
    this.userTypeMst = [
      {
        id: '1',
        type: 'Admin'
      },
      {
        id: '2',
        type: 'People'
      }
    ];
    this.locationMst = [
      {
        id: '1',
        location: 'Delhi'
      },
      {
        id: '2',
        location: 'Mumbai'
      },
      {
        id: '3',
        location: 'Calcutta'
      }
    ];
    this.securityList = [
      {
        user_id: '1',
        first_name: 'User 1',
        last_name: 'User 1',
        email_address: 'test1@gmail.com',
        user_type: 'Admin',
        location_name: 'Delhi',
        status: 'Active',
        groupList: [
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
          }
        ]
      },
      {
        user_id: '2',
        first_name: 'User 2',
        last_name: 'User 2',
        email_address: 'test2@gmail.com',
        user_type: 'Public',
        location_name: 'Mumbai',
        status: 'Active',
        groupList: [
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
          }
        ]
      },
      {
        user_id: '3',
        first_name: 'User 3',
        last_name: 'User 3',
        email_address: 'test3@gmail.com',
        user_type: 'Admin',
        location_name: 'Calcutta',
        status: 'Active',
        groupList: [
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
        ]
      }
    ];
  }
  addGroup(){
    this.securityObj.groupList.push(new GroupRoleVO());
  }
  onChangeGroup(group_name, index){
    for(let i=0; i<this.groupRoleMst.length; i++){
      if(this.groupRoleMst[i].group_name === group_name){
        this.securityObj.groupList[index] = this.groupRoleMst[i];
        break;
      }
    }
  }
  editItems(obj){
    if(obj === '-1'){
      this.securityObj = new SecurityVO();
      this.isDisplayScreen = false;
    } else {
      this.securityObj = obj;
      this.isDisplayScreen = false;
    }
  } 
  saveUser(){
    console.log(this.securityObj);
  }
  deleteItems(index) {
    var request = confirm("Are you sure you want to delete the record ?");
    if (request == true) {
      this.securityList.splice(index, 1);
    }
  }
  deleteGroup(index){
    var request = confirm("Are you sure you want to delete the record ?");
    if (request == true) {
      this.securityObj.groupList.splice(index, 1);
    }
  }
  searchRecord() {
    $("#searchTxt").on("keyup", function () {
      var value = $(this).val().toLowerCase().trim();
      $("#UserTableContent tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  }

}
