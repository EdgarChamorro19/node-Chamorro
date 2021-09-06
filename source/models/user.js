import {Schema,model} from 'mongoose'

const userschema=new Schema({
    username:{
        type: String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roels:[{
        ref:"Role",
        type:Schema.Types.ObjectId
    }]
},{
    timestamps:true,
    versionKey:false
})

export default userschema