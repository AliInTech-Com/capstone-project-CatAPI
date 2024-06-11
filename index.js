import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// this code is used to express the path of css files
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    // using axios to get images from the API
    const result = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10");
    res.render("index.ejs", {
        // Images Data Stored in imagesData and transfered to index.ejs file
        imagesData: result.data
    });
 
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
