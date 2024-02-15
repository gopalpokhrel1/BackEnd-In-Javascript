const model = require('../model/product');

const user = model.data;

exports.getproduct = async (req,res)=>{
    
    const data = await user.find();
    res.send(data);

}

exports.getspecificproduct= async(req,res)=>{

    try{
        if(req.url.endsWith('favicon.ico')){
            return;
        }

        const id = req.params.id;
    const data = await user.findById(id).select('-_id -password');
    res.send(data);
    }

    catch(error){
        console.log(error);
    };

   

}


exports.createuser = (req,res)=>{
    const data = new user(req.body);
    data.save().then(()=> res.json({result:true})).catch(err =>res.json({result:false}));
}

exports.replace = async (req,res)=>{
  const id = req.params.id;
  const data = await user.findOneAndReplace({_id:id}, req.body, {new:true});

  res.send(data);
}
exports.update = async (req,res)=>{
  const id = req.params.id;
  const data = await user.findOneAndUpdate({_id:id}, req.body, {new:true});

  res.send(data);
}
exports.delete = async (req,res)=>{
  const id = req.params.id;
  const data = await user.findOneAndDelete({_id:id});
  res.json({result:true});
}