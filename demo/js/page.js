var text = '';

document.querySelector('#btn-default').addEventListener('click', function(){
  text = 'Olá! Sou uma notificação Default.';
  notifier.show('Default!', text, '', '', 0);
}, false);

document.querySelector('#btn-info').addEventListener('click', function(){
  text = 'Você tem uma reunião agendada às 10:30h.';
  notifier.show('Lembrete!', text, 'info', '', 0);
}, false);

document.querySelector('#btn-success').addEventListener('click', function(){
  text = 'Você acabou de cadastrar seu currículo com sucesso.';
  notifier.show('Parabéns!', text, 'success', '', 0);
}, false);

document.querySelector('#btn-warning').addEventListener('click', function(){
  text = 'Os dados apresentados nessa tela podem sofrer alterações.';
  notifier.show('Atenção!', text, 'warning', '', 0);
}, false);

document.querySelector('#btn-danger').addEventListener('click', function(){
  text = 'Ocorreu um erro! Não foi possível salvar o registro.';
  notifier.show('Desculpe!', text, 'danger', '', 0);
}, false);

//com icones
document.querySelector('#btn-default-i').addEventListener('click', function(){
  text = 'Olá! Sou uma notificação Default.';
  notifier.show('Default!', text, '', '../../img/clock-48.png', 0);
}, false);

document.querySelector('#btn-info-i').addEventListener('click', function(){
  text = 'Você tem uma reunião agendada às 10:30h.';
  notifier.show('Lembrete!', text, 'info', '../../img/survey-48.png', 0);
}, false);

document.querySelector('#btn-success-i').addEventListener('click', function(){
  text = 'Você acabou de cadastrar seu currículo com sucesso.';
  notifier.show('Parabéns!', text, 'success', '../../img/ok-48.png', 0);
}, false);

document.querySelector('#btn-warning-i').addEventListener('click', function(){
  text = 'Os dados apresentados nessa tela podem sofrer alterações.';
  notifier.show('Atenção!', text, 'warning', '../../img/medium_priority-48.png', 0);
}, false);

document.querySelector('#btn-danger-i').addEventListener('click', function(){
  text = 'Ocorreu um erro! Não foi possível salvar o registro.';
  notifier.show('Desculpe!', text, 'danger', '../../img/high_priority-48.png', 0);
}, false);

//com temporizador
document.querySelector('#btn-default-temp').addEventListener('click', function(){
  text = 'Olá! Sou uma notificação Default.';
  notifier.show('Default!', text, '', '../../img/clock-48.png', 4000);
}, false);

document.querySelector('#btn-info-temp').addEventListener('click', function(){
  text = 'Você tem uma reunião agendada às 10:30h.';
  notifier.show('Lembrete!', text, 'info', '../../img/survey-48.png', 4000);
}, false);

document.querySelector('#btn-success-temp').addEventListener('click', function(){
  text = 'Você acabou de cadastrar seu currículo com sucesso.';
  notifier.show('Parabéns!', text, 'success', '../../img/ok-48.png', 4000);
}, false);

document.querySelector('#btn-warning-temp').addEventListener('click', function(){
  text = 'Os dados apresentados nessa tela podem sofrer alterações.';
  notifier.show('Atenção!', text, 'warning', '../../img/medium_priority-48.png', 4000);
}, false);

document.querySelector('#btn-danger-temp').addEventListener('click', function(){
  text = 'Ocorreu um erro! Não foi possível salvar o registro.';
  notifier.show('Desculpe!', text, 'danger', '../../img/high_priority-48.png', 4000);
}, false);

//abrir e fechar
var notificationId;
var showNotification = function () {
  notificationId = notifier.show('Lembrete!', 'Você tem uma reunião agendada às 10:30h.', '', '../../img/survey-48.png', 4000);
};
var hideNotification = function () {
  notifier.hide(notificationId);
};
document.querySelector('#btn-nt-show').addEventListener('click', showNotification);
document.querySelector('#btn-nt-hide').addEventListener('click', hideNotification);

//Selecão de Idioma
document.querySelector('#idiom').addEventListener('change', function () {

  var origin = window.location.origin;

  switch(this.value) {

    case 'en':
      window.location = origin + '/notifier/docs/en/index.html';
      break;
    case 'pt_br':
      window.location = origin + '/notifier/docs/pt_br/index.html';
      break;

  }

  console.log(window.location);
})