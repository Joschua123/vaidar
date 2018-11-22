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
      text: "O que é educação corporativa?e",
      responses: [
        {text: "resposta 1  "},
        {text: "resposta 2  "},
        {text: "resposta 3 "},
        {text: "resposta correta  ", correct: true},
      ]
    },
    {
      text: "Questão 2",
      responses: [
        {text: "resposta 1 "},
        {text: "resposta 2, correta ", correct: true},
      ]
    },
    {
      text: "Questão 3",
      responses: [
        {text: "resposta 1  "},
        {text: "respsota 2 correta  ", correct: true},
      ]
    },
    {
      text: "Questão 4",
      responses: [
        {text: "resposta 1 "},
        {text: "reposta 2  "},
        {text: "resposta 3, correta ", correct: true},
      ]
    },
    {
      text: "Questão 5",
      responses: [
        {text: "bla bla bla "},
        {text: "BLA BLA BLA ", correct: true},
      ]
    }

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
