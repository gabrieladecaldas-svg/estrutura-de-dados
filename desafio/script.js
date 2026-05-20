const alunos = [
    {nome:"Beatriz", idade:16, disciplinaPreferida:"Matematica"},
    {nome: "Heloisa", idade: 18, disciplinaPreferida: "Educação Fisica"},
    {nome:"Maristela", idade:16, disciplinaPreferida: "Geografia"},
    {nome: "Lucas", idade: 18, disciplinaPreferida: "Educação Fisica"},
    {nome:"livia", idade: 16, disciplinaPreferida: "artes"}

];

const primeiroNome = alunos [0].nome;
const ultimaDisciplina = alunos [4].disciplinaPreferida;

alert("Nome do primeiro aluno:" + primeiroNome);
alert("Disciplina do ultimo aluno:" + ultimaDisciplina);