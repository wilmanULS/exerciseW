import express from 'express';
import cors from 'cors';
import database from './configs/database';
import userRouter from './routes/users'
import productsRouter from './routes/products'
export default class Server {
 public app: express.Application
 public server:any;

 constructor(){
    this.app = express()
    this.config()
    this.routes()
 }

 config(){
    this.app.set('port', 4000)
    this.app.use(express.json())
   this.app.use(cors)
   this.app.use(express.urlencoded({ extended: true }))
   database.initialize().then(()=>{
    console.log('conexion BD initialized')}).
    catch(console.error)
 }
 routes(){
   this.app.use('/api/v1/user', userRouter)
   this.app.use('/api/v1/product', productsRouter)

 }
 init(){
    this.app.listen(this.app.get("port"), () => {
        console.log("startTime run")

        console.log(
          "App is running at http://localhost:%d in %s mode",
          this.app.get("port"),
          this.app.get("env")
        );
      });
 }
}