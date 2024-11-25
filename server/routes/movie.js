var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
// telling my router that I have this model
let Movie = require('../model/movie')
const movie = require('../model/movie')
let movieController = require('../controllers/movie.js')
/* Get route for the book list - Read Operation */
/*
GET,
Post,
Put --> Edit/Update
*/
/* Read Operation --> Get route for displaying the books list */
router.get('/',async(req,res,next)=>{
try{
    const MovieList = await Movie.find();
    res.render('Movie/list',{
        title:'Movies',
        MovieList:MovieList
    })}
    catch(err){
        console.error(err);
        res.render('Movie/list',{
            error:'Error on the server'
        })
    }
    });
/* Create Operation --> Get route for displaying me the Add Page */
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Movie/add',{
            title: 'Add Movie'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Movie/list',{
            error:'Error on the server'
        })
    }
});
/* Create Operation --> Post route for processing the Add Page */
router.post('/add',async(req,res,next)=>{
    try{
        let newMovie = Movie({
            "MovieTitle":req.body.MovieTitle,
            "Type":req.body.Type,
            "Director":req.body.Director,
            "YearPublished":req.body.YearPublished,
            "Description":req.body.Description,
            "Price":req.body.Price
        });
        Movie.create(newMovie).then(()=>{
            res.redirect('/movieslist');
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('Movie/list',{
            error:'Error on the server'
        })
    }
});
/* Update Operation --> Get route for displaying me the Edit Page */
router.get('/edit/:id',async(req,res,next)=>{
    try{
        const id = req.params.id;
        const movieToEdit= await Movie.findById(id);
        res.render('Movie/edit',
            {
                title:'Edit Movie',
                Movie:movieToEdit
            }
        )
    }
    catch(err)
    {
        console.error(err);
        next(err); // passing the error
    }
});
/* Update Operation --> Post route for processing the Edit Page */ 
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        let updatedMovie = Movie({
            "_id":id,
            "MovieTitle":req.body.MovieTitle,
            "Type":req.body.Type,
            "Director":req.body.Director,
            "YearPublished":req.body.YearPublished,
            "Description":req.body.Description,
            "Price":req.body.Price
        });
        Movie.findByIdAndUpdate(id,updatedMovie).then(()=>{
            res.redirect('/movieslist')
        })
    }
    catch(err){
        console.error(err);
        res.render('Movies/list',{
            error:'Error on the server'
        })
    }
});
/* Delete Operation --> Get route to perform Delete Operation */
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id=req.params.id;
        Movie.deleteOne({_id:id}).then(()=>{
            res.redirect('/movieslist')
        })
    }
    catch(error){
        console.error(err);
        res.render('Movie/list',{
            error:'Error on the server'
        })
    }
});
module.exports = router;