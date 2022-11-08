const Spice = require('../../models/Spice')

//GET '/spices'
const getAllSpice = async (req, res) => {
  try {
    const allSpices = await Spice.find({})
    res.json(allSpices)
  } catch(err) {
    res.json({message:err})
  }
};

//POST '/spices/new'
const newSpice = (req, res, next) => {
  Spice.findOne({ name: req.body.name }, (err, data) => {

    //if spice not in db, add it
    if (!data) {
        //create a new spice object using the Spice model and req.body
        const newSpice = new Spice({
            name:req.body.name,
            size: req.body.size,
            expDate: req.body.expDate,
            amt: req.body.amt
        })

        // save this object to database
        newSpice.save((err, data)=>{
            if(err) return res.json({Error: err});
            return res.json(data);
        })
    //if there's an error or the tea is in db, return a message         
    }else{
        if(err) return res.json(`Something went wrong, please try again. ${err}`);
        return res.json({message:"Spice already exists"});
    }
})    
};

//DELETE '/spices'
const deleteAllSpice = (req, res, next) => {
  res.json({message: "DELETE all spices"});
};

//GET '/spices/:id/view'
const getOneSpice = (req, res, next) => {
  res.json({message: "GET 1 spice"});
};

//POST '/spices/:name'
// const newComment = (req, res, next) => {
//   res.json({message: "POST 1 spice comment"});
// };

//DELETE '/spices/:id'
const deleteOneSpice = (req, res, next) => {
  Spice.deleteOne({
    _id: req.params.id
  }, (error, data) => {
    console.log(data);
    res.redirect('');
  })
};

// EDIT '/spices/:id/edit'
const editSpice = (req, res) => {
  Spice.findOne({
    _id: req.params.id
  }, (error, foundSpice) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      })
    } else {
      res.render('spices/:id/edit', { spice: foundSpice });
    }
  })
}

//export controller functions
module.exports = {
  getAllSpice, 
  newSpice,
  deleteAllSpice,
  getOneSpice,
  editSpice,
  // newComment,
  deleteOneSpice
};
