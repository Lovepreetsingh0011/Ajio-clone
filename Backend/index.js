import { app } from "./Src/App.js";
import "dotenv/config";

import { dbconnetion } from "./Src/Db/db.js";
const app = "lovy";
dbconnetion().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Appliction Listen At Port no", process.env.PORT);
  });
});
