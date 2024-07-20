import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hrithikrana:334455667788@cluster1.e3rdlxe.mongodb.net/Delivery-App"
    )
    .then(() => console.log("DB Connected"));
};
