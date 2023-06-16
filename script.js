//botoes
const btn_salvar = document.getElementById("btn_salvar")
const btn_pesquisar = document.getElementById("btn_pesquisar")

//vetor de certidoes
const vetor_certidao = []


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
    <b>Nome : </b> ${x.nome}<br>
    <b>CPF : </b> ${x.cpf}<br>
    <b>Matrícula : </b> ${x.matricula}<br>
    <b>Data de Nascimento : </b> ${x.dataNasc}<br>
    <b>Data : </b> ${x.data}<br>
    <b>Hora : </b> ${x.hora}<br>
    <b>Naturalidade : </b> ${x.naturalidade}<br>
    <b>Município : </b> ${x.muniRegistro}<br>
    <b>Município de Nascimento : </b> ${x.muniNasc}<br>
    <b>Sexo : </b> ${x.sexo}<br>
    <b>Filiação : </b> ${x.filiacao}<br>
    <b>Avos : </b> ${x.avos}<br>
    <b>Gemeos : </b> ${x.gemeos}<br>
    <b>Nome dos Gemeos: </b> ${x.nomeMGemeos}<br>
    <b>Data de Registro : </b> ${x.dataReg}<br>
    <b>DNV: </b> ${x.dnv}<br>
    <b>Anotações : </b> ${x.anotacoes}<br>
`
}

//
let salvar = () =>{
    let nome = document.getElementById("nome").value
    let cpf = document.getElementById("cpf").value
    let matricula = document.getElementById("matricula").value
    let dataNasc = document.getElementById("data-nascimento").value
    let data = document.getElementById("data").value
    let hora = document.getElementById("hora-nascimento").value
    let naturalidade = document.getElementById("naturalidade").value
    let muniRegistro =  document.getElementById("municipio").value
    let muniNasc = document.getElementById("municipio").value
    let sexo = document.getElementById("sexo").value
    let filiacao = document.getElementById("filiacao").value
    let avos = document.getElementById("avos").value
    let gemeos = document.getElementById("gemeos").value
    let nomeMGemeos = document.getElementById("nome-gemeos").value
    let dataReg =  document.getElementById("data-registro").value
    let dnv = document.getElementById("dnv").value
    let anotacoes = document.getElementById("averbacoes").value

    let c = new Certidao(nome, cpf, matricula, dataNasc, data, hora, naturalidade, muniRegistro, muniNasc, sexo, filiacao, avos, gemeos, nomeMGemeos, dataReg, dnv, anotacoes)
    vetor_certidao.push(c)

    alert("CERTIDAO CADASTRADA COM SUCESSO")

    sessionStorage.setItem('vetor_certidao', JSON.stringify(vetor_certidao))
}

let pesquisar = () =>{
    v = document.getElementById("entrada").value
    
    let vetor = JSON.parse(sessionStorage.getItem('vetor_certidao'))
    
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].matricula == v){
            const saida = document.getElementById("saida")
            saida.innerHTML = (exibeDados(vetor[i]))
        } else {
            alert("ERRO: CERTIDAO NAO ENCONTRADA")
        }
    }
}

let limpar = () =>{
    const saida = document.getElementById("saida")
    saida.innerHTML = ''
}

let naoFunciona = () =>{
    alert("ESSA FUNCIONALIDADE AINDA NÃO ESTÁ DISPONÍVEL NESTA VERSÃO!")
}
