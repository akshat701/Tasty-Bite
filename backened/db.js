const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI
const mongoDB =async() =>{
    await mongoose
	.connect(mongoURI)
	.then(async (res) => {
		console.log("database connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        //console.log(fetched_data);
        const data = await fetched_data.find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategory.find({}).toArray();
        global.food_items = data;
        global.foodCategory = catData;
        
        /*
        fetched_data.find({}).toArray(function(err,data){
            if(err){
                console.log(err);
            }
            else{

                console.log(data);
            }
        })*/
	})
	.catch((err) => {
		console.log(err);
});
    
}

module.exports = mongoDB;