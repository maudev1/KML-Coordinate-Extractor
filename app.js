
//classe 

class car {
    constructor(name) {
        this.name = name
        // this.mark = mark
    }

    goFront() {
        return console.log(this.name + ' go!')
    }

    goBack() {
        return console.log(this.name + ' go back!')
    }

}

const myCar = new car('fusca')

myCar.goFront()

//factory

function createAlert(txt){
    return{
        txt:txt,
        msg(){
            return alert(txt)
        }
    }
    
} 

const alerta = createAlert('Minha mensagem')

alerta.msg()