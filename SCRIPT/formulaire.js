export default class Formulaire {

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

    //méthode permettant d'afficher le champ
    showChamp(id) {
        this.getDiv(id).classList.remove('disp')
        this.getDiv(id).classList.add('app')
        this.getElement(id).required = true
    }

    //méthode permettant de masquer le champ avec animation
    hideChamp(id) {
        this.getDiv(id).classList.remove('app')
        this.getDiv(id).classList.add('disp')
        this.getElement(id).required = false
    }

    //méthode pour savoir si un radio est sélectionné
    isSelected(id, value, action, otherAction) {
        this.formData = new FormData(this.formulaireHTML)
        if (this.formData.get(id) == value) {
            action()
        }
        else {
            otherAction()
        }
    }

    //méthode pour récupérer les éléments de chaque input (et les ajouter à answers)
    getAnswers() {
        this.formData = new FormData(this.formulaireHTML)
        this.formData.forEach (
            (value, key) => {
                console.log(key + " : " + value)
            }
        )
    }
}