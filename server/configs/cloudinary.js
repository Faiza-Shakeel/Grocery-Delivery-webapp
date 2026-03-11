import {v2 as cloudinary} from "cloudinary"
const connectCloudinary=async()=>{
    cloudinary.config({
        cloud_name: "dr3zre0wf",
        api_key: 418532298776972,
        api_secret:  "DxND_pd0fntNILd6jRTB-PGhLg4"
    })
}
export default connectCloudinary