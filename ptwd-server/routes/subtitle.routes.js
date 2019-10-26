const express = require('express');
const subtitleRouter = express.Router();
const Subtitle = require("../models/Subtitle");

/*******************************************************
 * 
 *                   GET ROUTES
 * 
 * *****************************************************/



/*******************************************************
 * 
 *                   POST ROUTES
 * 
 * *****************************************************/

subtitleRouter.post('/:projectId/add-sub', (req,res,next) => {  
  // TODO (in React): add projectId to the URL
  const {projectId = req.params.projectId, inTime, outTime, text } = req.body;
  Subtitle
        .create({projectId, inTime, outTime, text }) //adds new subtitle to current project
        .then(projectDocument => {

          res.status(401).json({ message: "Subtitle added" });         
          
          
        })
        .catch(err => next(err));
});

/*******************************************************
 * 
 *                   DELETE ROUTES
 * 
 * *****************************************************/

 subtitleRouter.delete('/:subId/delete-sub', (req,res,next) => {
  let subID = req.params.subId;

  Subtitle
    .findOneAndDelete({ _id: subID })
    .then(projectDocument => {
      res.status(200).json({ message: 'Subtitle deleted: ' + projectDocument._id})
    })
    .catch(err);
 });

module.exports = subtitleRouter;