import mongoose, {Schema, Document} from "mongoose"

export  interface Iproduct extends Document {
    title: string;
    image: string;
    price: number;
    stock: number;
}

const productSchema = new Schema<Iproduct>( {
	title: {type: String, required: true},
	stock: {type: Number, required: true, default: 0},
	image: {type: String, required: true},
	price: {type: Number, required: true}
});

const productModel = mongoose.model<Iproduct>("product", productSchema);
export default productModel;