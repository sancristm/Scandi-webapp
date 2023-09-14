import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    
    SKU: {
        type: String,
        required: true,
        unique: true,
      },
    name: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
        
      }
    ,
    size: {
      type: String,
      
    },
    weight: {
        type: Number,
        
        
      },
      
        Height: {
          type: Number,
        },
        Width: {
          type: Number,
        },
        Length: {
          type: Number,
        },
    
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;