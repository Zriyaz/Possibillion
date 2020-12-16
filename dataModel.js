const mongoose = require('mongoose')

const userDataSchema = mongoose.Schema({
    
    title: {
        type: String,
        trim : true,
        required: true,
    },
    description: {
        type: String,
        trim : true,
        required: true,
    },
    type:{
        type: String,
        trim : true,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true, 
    },
    siteName:{
        type: String,
        required: true, 
    },
    siteCreator:{
        type: String,
        required: true, 
    },
  }
)

const UserData = mongoose.model('UserData', userDataSchema)

module.exports = UserData
