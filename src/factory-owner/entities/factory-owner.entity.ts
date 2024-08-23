import { PrimaryGeneratedColumn } from "typeorm";


export class FactoryOwner {
    @PrimaryGeneratedColumn()
    name:string;
}
