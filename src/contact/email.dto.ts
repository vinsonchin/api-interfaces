import {IsDefined, IsEmail, IsEnum} from "class-validator";
import {EmailCategory, EmailModel} from "./email.model";
import {WithPrimary} from "../core";

export class EmailDTO extends WithPrimary implements EmailModel {
    @IsDefined()
    @IsEmail()
    address: string

    @IsDefined()
    @IsEnum(EmailCategory)
    category: EmailCategory;
}
