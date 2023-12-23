const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const itemsData = {
    items: [
      {
        "id": 1,
        "img":"https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852114_1280.png",
        "title": "Cotton Shirt",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio?",
        "price": 250,
        "amount": 300
      },
      {
        "id": 2,
        "img" : "https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png",
        "title": "White Tshirt",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio?",
        "price": 550,
        "amount": 600
      },
      {
        "id": 3,
        "img":"https://cdn.pixabay.com/photo/2016/11/23/06/57/isolated-t-shirt-1852113_1280.png",
        "title": "Full Sleeve Tshirt",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, odio?",
        "price": 200,
        "amount": 250
      }
    ]
  };

app.get('/',(req,res)=>{
    res.send("welcome")
})


app.get('/items', async (req, res) => {
    try {
        res.json(itemsData);
    } catch (err) {
      res.send(err);
    }
  });


app.listen(3001,()=>{
    console.log("connected")
})
