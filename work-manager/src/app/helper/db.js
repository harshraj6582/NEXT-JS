import mongoose from "mongoose"
import { User } from "@/models/user"; 
export const  connectDb = async () =>{
    try{

       const {connection} = await  mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "Work_Manager"
        });
        console.log("Db is Connected ")


        // Testing And Creating The User 

      const uuser =   new User({
            name:"test name",
            email : "test@gmail.com",
            password : "testpassword",
            about : "Thsi is Just "
        })
       ;
       await uuser.save();

       console.log("User is Just Created ");
    }
    catch(error){
        console.log("Failed To Connect with datbase ");
        console.log(error)

    }
}