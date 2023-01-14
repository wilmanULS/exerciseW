import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'
export enum SizeType{
    S80='80'
}

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    price:number
    @Column()
    photo:string
    @Column()
    observation:string
    @Column({type: 'enum', enum: SizeType,})
    size:SizeType
    @CreateDateColumn()
    created_at:Date
    @UpdateDateColumn()
    updated_at:Date
}