var mainController = {
    api: function (req, res){
        res.status(200).json(exo);
    }
};

// DATA Model
const exo = {
    question : 'Aimez-vous React ?',
    reponses :{
        oui: 'Bon choix !',
        non: 'Zut !'
    }
};

module.exports = mainController;