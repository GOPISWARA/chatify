import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"

dotenv.config();
const app = express();
const __dirname = path.resolve();


const port=process.env.PORT;
console.log(port);
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

if(process.env.NODE_ENV === "production") {
    console.log("Hello");
    console.log(process.env.NODE_ENV);
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

app.listen(3000,() => 
    console.log(`Server running on port numbers ${port}`) 
)