const awsAccessKey = "AKIA1234567890ABCDEF";
const awsSecretKey = "abc123DEF456ghi789jkl012mno345pqr678stu9";

// 2. Prova do Semgrep: Função eval recebendo uma variável externa real
function rodarCodigo(entradaDoUsuario) {
    eval(entradaDoUsuario);
}