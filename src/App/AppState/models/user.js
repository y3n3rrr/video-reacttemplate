import { observable, action,computed } from "mobx"
export class User{
    @observable Id;
    Username;
    Password;
    ConfirmPassword;
    Email;
}
export class Video{
    @observable Id;
    Name;
    @observable Url;
    PublishDate;
    @observable Comments=[];
}

export class Comment{
    @observable Id;
    Name;
    Email;
    Phone;
    Message;
    CommentDate;
    VideoId;
}