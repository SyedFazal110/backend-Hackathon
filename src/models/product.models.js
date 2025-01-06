import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
  title: { 
    type: String,
     required: true
   },

  description: {
     type: String, 
    required: true 
  },

  price: { 
    type: Number, 
    required: true 
},

  image: { 
    type: String, 
    required: true 
  },

  postedBy: {
     type: String, 
    required: true
   },

  postedAt: {
     type: Date, 
    default: Date.now
   },
   products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

export default mongoose.model("Ad", adSchema);