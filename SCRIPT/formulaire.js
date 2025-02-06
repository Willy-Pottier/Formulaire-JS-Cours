export default class formulaire {

    //DEFINITION DU CONSTRUCTEUR

    constructor(id) {
        this.id = id
        this.formulaireHTML = document.getElementById(this.id)
        this.formData = new FormData(this.formulaireHTML)
        this.answers = new Array()
    }

    //méthode pour récupérer le div parent
    getDiv(id) {
        return document.getElementById(id).parentNode
    }

    //méthode pour récupérer un élément
    getElement(id) {
        return document.getElementById(id)
    }

    //méthode permettant de masquer un élément sans animation
    maskChamp(id) {
        this.getDiv(id).classList.add('masque')
        this.getElement(id).required = false
    }

}