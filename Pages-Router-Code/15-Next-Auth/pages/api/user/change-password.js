import { hashPassword, verifyPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import {getServerSession} from 'next-auth/next'
import {authOptions} from '../auth/[...nextauth]'

async function handler(req, res){
    if(req.method !== 'PATCH'){
        return;
    }
    const session = await getServerSession();
    if(!session){
        return res.json({message : 'session 정보 없음'}); 
    }

    const userEmail = session.user.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    const client = await connectToDatabase();

    const usersCollection = client.db().collection('users');

    const user = await usersCollection.findOne({email : userEmail});

    if(!user){
        client.close();
        return res.status(422).json({message : 'Not User'});
    }

    const isPasswordValid = await verifyPassword(oldPassword, user.password);

    if(!isPasswordValid){
        client.close();
        return res.status(422).json({message : 'Invalid Password'})
    }

    const newCurrentPassword = await hashPassword(newPassword);

    usersCollection.updateOne({email : userEmail}, {$set : {password : newCurrentPassword}});

    return res.status(200).json({message : 'Success Passsword Change'});

}

export default handler;