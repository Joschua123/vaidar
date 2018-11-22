$(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
});

window.onload=function(){
  var quiz = {
    title: "My quiz",
    questions:[
    {
      text: "O que é Squad?",
      responses: [
        {text: "Um fremework", correct: true},
        {text: "Uma proposta de atualização de software "},
        {text: "Um método de trabalho"},
        {text: "Um software"},
      ]
    },
    {
      text: "Qual a principal importancia do Squad? ",
      responses: [
        {text: "Desenvolvimento de softwares mais rapidos "},
        {text: "Unificar o objetivo da equipe", correct: true},
        {text: "Aprendizagem mais adquada dos produtos "},
        {text: "Não possui"},
      ]
    },
    {
      text: "Qual impresa foi responsavél pela criação dos squads",
      responses: [
        {text: "Tecnospeed"},
        {text: "Spotify", correct: true},
        {text: "Apple"},
        {text: "Nubank"},
      ]
    },
    {
      text: "Por que adquirir o modelo de squad dentro da empresa",
      responses: [
        {text: "Para melhorar rendimento salarial"},
        {text: "Melhorar o atendimento e o desenvolvimento",correct: true},
        {text: "Para ter uma melhor interação com o usuario"},
      ]
    },
    {
      text: "O que é fremework?",
      responses: [
        {text: "Um template com diversas funções",correct: true},
        {text: "É uma métodologia de trabalho"},
        {text: "É um método de desenvolver software"},
        {text: "São parte de um software"},
      ]
    },
    {
      text: "Por que ter colocaboração? ",
      responses: [
        {text: "Para ter um bom trabalho em equipe",correct: true},
        {text: "Para ter ganho salarial"},
        {text: "Para não ter desenvolvimento pessoal"},
        {text: "Para ter um menor resultado"},
      ]
    },
    {
      text: "O processo de colaboração é importante para uma empresa? ",
      responses: [
        {text: "Sim",correct: true},
        {text: "Talvez"},
        {text: "Não"},
      ]
    },
    {
      text: "O sentimento de não percentecimento é gerado pelo framework de squad?",
      responses: [
        {text: "Sim",correct: true},
        {text: "Talvez"},
        {text: "Não"},
      ]
    },
    {
      text: "O squad gera melhor adaptação para novos colaboradores?",
      responses: [
        {text: "Sim",correct: true},
        {text: "Talvez"},
        {text: "Não"},
      ]
    },
    {
      text: "Você acha que esse framework ajuda a empresa a crescer? ",
      responses: [
        {text: "Sim",correct: true},
        {text: "Talvez"},
        {text: "Não"},
      ]
    },

  ]};

  new Vue({
    el: '#app',
    data: {
      quiz: quiz,
      questionIndex: 0,
      userResesponse: Array(quiz.questions.length).fill(false)
    },
    methods: {
      next: function(){
        this.questionIndex++;
      },
      prev: function(){
        this.questionIndex--;
      },
      score: function(){
        return this.userResesponse.filter(function(val) {return val}).length;
      }
    }
    });
};
