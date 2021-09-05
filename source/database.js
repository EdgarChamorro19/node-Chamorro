import mongoose from "mongoose" 

mongoose.connect("mongodb://Localhost/companydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('Base de datos Conectada'))
    .catch(error => console.log(error))