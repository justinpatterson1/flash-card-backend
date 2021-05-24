const flashCardModel = require("../model/Q&AModel.js");

exports.getAllFlashCards = (req,res)=>
{
    flashCardModel.find()
        .then((item)=>{
            res.json({
                message:"All items have been returned",
                data:item,
                length:item.length
            })
        })
        .catch(err=>{
            res.status(404).json({
                message:err
            })
        })
}

exports.getAFlashCard = (req,res)=>
{
    flashCardModel.findByID(req.params.id)
        .then((item)=>{
            if(item)
        {
            res.json({
                message:`Item ${req.params.id} has been returned`,
                data:item
            })
        }
        else
        {
            
                res.status(404).json({
                    message:`Oops something happened: ${err}`
                })
            
        }
        
    })
    .catch(err=>{
        res.status(500).json({
            message:`Oops something happened: ${err}`
        })
    })
}

exports.createAFlashCard = (req,res)=>
{
    const newFlashCard = new flashCardModel(req.body);

    newFlashCard.save()
        .then((item)=>{
            res.json({
                message:"Flash card has been added",
                data:item
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:err
            })
        })
}

exports.deleteAFlashCard = (req,res)=>
{
    flashCardModel.findByIdAndDelete({_id:req.params.id})
        .then((item)=>{
            if(item)
            {
                res.json({
                    message:`Item ${req.params.id} has been deleted`,
                    data:item
                })
            }
            else
            {
                
                    res.status(404).json({
                        message:`Oops something happened: ${err}`
                    })
                
            }
            
        })
        .catch(err=>{
            res.status(500).json({
                message:`Oops something happened: ${err}`
            })
        })
}

exports.updateAFlashCard = (req,res)=>
{
    flashCardModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        .then((item)=>{
            if(item)
            {
                res.json({
                    message:`Item ${req.params.id} has been updated`,
                    data:item
                })
            }
            else
            {
                
                    res.status(404).json({
                        message:`Oops something happened: ${err}`
                    })
                
            }
            
        })
        .catch(err=>{
            res.status(500).json({
                message:`Oops something happened: ${err}`
            })
        })
}