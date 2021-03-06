import { Column, Entity, Index } from "typeorm";
import { LoginPlatform, Sex } from "../../controller/login/Constants";
import { Content } from "../Content";

@Entity({
    name: "users",
})
export class UserModel extends Content {
    @Index("users_user_uuid_uindex", {
        unique: true,
    })
    @Column({
        length: 40,
    })
    user_uuid: string;

    @Column({
        length: 50,
    })
    user_name: string;

    @Column({
        precision: 32,
    })
    user_password: string;

    @Column({
        length: 2083,
    })
    avatar_url: string;

    @Column({
        length: 20,
    })
    phone: string;

    @Column({
        type: "enum",
        enum: [Sex.Man, Sex.Woman],
    })
    sex: Sex;

    @Column({
        type: "enum",
        enum: [LoginPlatform.WeChat, LoginPlatform.Google],
    })
    last_login_platform: LoginPlatform;

    @Index("users_is_delete_index")
    @Column({
        default: false,
    })
    is_delete: boolean;
}
