@Entity()
export class User {
    //AUTO GENERATE ID
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    age: number;
}

const repository = getRepository(User);

const user = new User();
user.name = "Troy";
user.email = "troy@sololearn.com";
user.age = 25;
await repository.save(user);

