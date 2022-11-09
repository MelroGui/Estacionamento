

function showModalOp() {
    document.querySelector('.modalOp').classList.remove('model')
}
function closeModalOp() {
    document.querySelector('.modalOp').classList.add('model')
}

function showModalVaga() {
    if (confirm('Tem certeza que deseja incluir mais uma vaga no estacionamento?')) {
        document.querySelector('.modalVaga').classList.remove('model')
    }
}
function closeModalVaga() {
    document.querySelector('.modalVaga').classList.add('model')
}

function showModalHis() {
    document.querySelector('.modalHis').classList.remove('model')
}
function closeModalHis() {
    document.querySelector('.modalHis').classList.add('model')
}

function showModalFil() {
    document.querySelector('.modalFil').classList.remove('model')
}
function closeModalFil() {
    document.querySelector('.modalFil').classList.add('model')
}

