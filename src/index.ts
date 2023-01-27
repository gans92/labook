import app from "./app";
import getAllCharacters from "./getAllCharacters";
import { userRouter, postRouter } from "./routes/routes"

app.get("/character", getAllCharacters);

app.use('/user', userRouter)
app.use('/post', postRouter)
