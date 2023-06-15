class Certidao{
    constructor(nome, cpf, matricula, dataNasc, data, hora, naturalidade, muniRegistro, muniNasc, sexo, filiacao, avos, gemeos, nomeMGemeos, dataReg, dnv, anotacoes){
        this.nome = nome
        this.cpf = cpf
        this.matricula = matricula
        this.dataNasc = dataNasc
        this.data = data
        this.hora = hora
        this.naturalidade = naturalidade
        this.muniRegistro =  muniRegistro
        this.muniNasc = muniNasc
        this.sexo = sexo
        this.filiacao = filiacao
        this.avos = avos
        this.gemeos = gemeos
        this.nomeMGemeos = nomeMGemeos
        this.dataReg =  dataReg 
        this.dnv = dnv
        this.anotacoes = anotacoes
    }

    //funcao get
    getNome(){
        return this.nome
    }

    getCpf(){
        return this.cpf
    }

    getMatricula(){
        return this.matricula
    }

    getDataNasc(){
        return this.dataNasc
    }

    getData(){
        return this.data
    }

    getHora(){
        return this.hora
    }

    getNaturalidade(){
        return this.naturalidade
    }

    getMuniRegistro(){
        return this.muniRegistro
    }

    getMuniNasc(){
        return this.muniNasc
    }

    getSexo(){
        return this.sexo
    }

    getFiliacao(){
        return this.filiacao
    }
    
    getAvos(){
        return this.avos
    }

    getGemeos(){
        return this.gemeos
    }
    
    getNomeMGemeos(){
        return this.nomeMGemeos
    }

    getDataReg(){
        return this.dataReg
    }
    
    getDnv(){
        return this.dnv
    }

    getAnotacoes(){
        return this.anotacoes
    }
}

//exibe dados
let exibeDados = (x) => {
    return `
<b>Nome : </b> ${x.getNome()}
<b>Nome : </b> ${x.getNome()}
<b>Nome : </b> ${x.getCpf()}
<b>Nome : </b> ${x.getMatricula()}
<b>Nome : </b> ${x.getDataNasc()}
<b>Nome : </b> ${x.getData()}
<b>Nome : </b> ${x.getHora()}
<b>Nome : </b> ${x.getNaturalidade()}
<b>Nome : </b> ${x.getMuniRegistro()}
<b>Nome : </b> ${x.getMuniNasc()}
<b>Nome : </b> ${x.getSexo()}
<b>Nome : </b> ${x.getFiliacao()}
<b>Nome : </b> ${x.getAvos()}
<b>Nome : </b> ${x.getGemeos()}
<b>Nome : </b> ${x.getNomeMGemeos()}
<b>Nome : </b> ${x.getDataReg()}
<b>Nome : </b> ${x.getDnv()}
<b>Nome : </b> ${x.getAnotacoes()}
    `
}

//vetor de certidoes
let vetor_certidao = []

//cadastra
let cadastra = (x) =>{
    //pega variaveis
    let nome = "nome"
    let cpf = "cpf"
    let matricula = x
    let dataNasc = "dataNasc"
    let data = "data"
    let hora = "hora"
    let naturalidade = "naturalidade"
    let muniRegistro =  "muniRegistro"
    let muniNasc = "muniNasc"
    let sexo = "sexo"
    let filiacao = "filiacao"
    let avos = "avos"
    let gemeos = "gemeos"
    let nomeMGemeos = "nomeMGemeos"
    let dataReg =  "dataReg"
    let dnv = "dnv"
    let anotacoes = "anotacoes"

    let c = new Certidao(nome, cpf, matricula, dataNasc, data, hora, naturalidade, muniRegistro, muniNasc, sexo, filiacao, avos, gemeos, nomeMGemeos, dataReg, dnv, anotacoes)

    vetor_certidao.push(c)
}

//pesquisa
let pesquisa = (v) =>{
    for(let i = 0; i < (vetor_certidao.length); i++){
        if(vetor_certidao[i].getMatricula() == v){
            return vetor_certidao[i]
        }
    }

    return "Certidao nao encontrada"
}
