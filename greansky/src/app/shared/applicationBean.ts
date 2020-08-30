export class UserVO {
    public email: string;
    public password: string;
    public firstname: string;
    public lastname: string;
    public user_id: string;
}
export class SecurityVO {
    public user_id: string;
    public first_name: string;
    public last_name: string;
    public email_address: string;
    public user_type: string;
    public location_name: string;
    public status: string;
    public groupList: GroupRoleVO[] = [];
}
export class GroupRoleVO {
    public group_id: string;
    public group_name: string;
    public group_desc: string;
    public status: string;
}
export class UserTypeVO {
    public id: string;
    public type: string;
}
export class LocationVO {
    public id: string;
    public location: string;
}