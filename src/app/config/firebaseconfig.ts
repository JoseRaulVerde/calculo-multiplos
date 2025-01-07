import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { environment } from '../../enviroments/enviroment';

const app = initializeApp(environment.firebase);

const database = getDatabase(app);

export default database;
