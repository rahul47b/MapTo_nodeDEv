import {userModel} from '../models/index'


// basic api's for userModel Crud's ..

export const createUser = async (req,res)=>{
    try{
            const{first_name,last_name,email}=req.body;
            // to do --- email validation and existing check ...
            await userModel.create({first_name,last_name,email});
            res.status(200).send({
                message:"user created successfully ..."
            })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"something went wrong user not created ..."
        })
    }
}


export const deleteUser = async (req,res)=>{
    try{
        const{id}=req.body;
        await userModel.destroy({where:{id},logging:false});
        res.status(200).send({
            message:"user deleted successfully ..."
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            message:"something went wrong user not deleted ..."
        })
    }
}


export const updateUser = async (req,res)=>{
    try{

    }
    catch(error){
        console.log(error)
    }
}


export const usersList = async (req,res)=>{
    try{

    }
    catch(error){
        console.log(error)
    }
}