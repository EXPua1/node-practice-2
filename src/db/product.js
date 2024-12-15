import { Schema, model } from 'mongoose';

const productsSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['books', 'electronics', 'clothing', 'other'],
      default: 'other',
    },
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ProductsCollection = model('products', productsSchema);
