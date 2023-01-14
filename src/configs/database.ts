import { User } from '../entities/user'
import {DataSource} from 'typeorm'

export default new DataSource ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'test_products',
    entities: [User],
    synchronize: true,
    logging: false,

})