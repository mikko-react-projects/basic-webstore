import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    slug: {
      type: String,
      required: true,
      lowercase: true
    },
    storeImage: [{
      type: String
    }],
    productImage: [{
      type: String
    }],
    productThumbnail: [{
      type: String
    }],
    width: {
      type: String
    },
    name: {
      type: String
    },
    variable: {
      type: String
    },
    options: [{
      id: {
        type: Number,
        required: true
      },
      key: {
        type: String
      },
      name: {
        type: String
      },
      price: {
        type: Number
      }
    }],
    description: {
      type: String
    }
  }
);

export default mongoose.model('Product', schema);
