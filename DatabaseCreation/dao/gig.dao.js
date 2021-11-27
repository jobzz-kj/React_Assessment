const Gig = require('../models/Gig');
var gigDao = {
    findAll : findAll,
    create : create,
    findById : findById,
    deleteById : deleteById,
}
function findAll(){
    return Gig.findAll();
}

function findById(id){
    return Gig.findByPk(id);
}

function deleteById(id){
    return Gig.destroy({where : {id : id}});
}

function create(gig){
    var newGig = new Gig(gig)
    return newGig.save();
}



module.exports = gigDao;


