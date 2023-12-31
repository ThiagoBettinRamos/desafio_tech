import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";
  import { User } from "./user.entity";
  
  @Entity("contacts")
  class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column({ length: 95 })
    fullname: string;
  
    @Column({ length: 45 })
    email: string;
  
    @Column({ length: 11 })
    phone: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string;
  
    @ManyToOne(() => User, (user) => user.contacts, {onDelete: "CASCADE"})
    user: User
  }
  
  export { Contact };