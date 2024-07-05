import express from "npm:express@4.19.2";
import mongoose from "npm:mongoose@8.4.4";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";



const env = await load();

try {

  const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

  if (!MONGO_URL) {
    console.log("No se ha encontrado la variable de entorno MONGO_URL");
    Deno.exit(1);
  }

  await mongoose.connect(MONGO_URL);
  console.log("Conectado a MongoDB");

  const app = express();
  app.use(express.json());


  //app.post("/postContacts", postContacts);
  //app.get("/allContacts", AllContacts);
  //app.get("/getContact/:dni", getContacto);
  //app.delete("/deleteContact/:dni", deleteContacts);
  //app.put("/updateContact/:dni", updateContact);

  app.listen(3000, () => {
    console.log("🎮🔫 Server listening on port 3000 🎮🔫");
  });

} catch (error) {
  console.log(error);
}