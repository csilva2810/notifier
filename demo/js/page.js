var textDefault,
    titleDefault,
    textInfo,
    titleInfo,
    textSuccess,
    titleSuccess,
    textWarning,
    titleWarning,
    textDanger,
    titleDanger;
    
var idiom = document.querySelector("#idiom").value;

switch (idiom) {
  case 'en':
    
    textDefault = 'I am a default notification';
    titleDefault = 'Hello!';
    textInfo = 'You have a meeting at 10:30 AM';
    titleInfo = 'Reminder!';
    textSuccess = 'You just submit your resume successfuly.';
    titleSuccess = 'Well Done!';
    textWarning = 'The data presented here can be change.';
    titleWarning = 'Warning!';
    textDanger = 'Could not complete your transaction.';
    titleDanger = 'Sorry!';
    
    break;
  case 'pt_br':
    
    textDefault = 'Sou uma notificação Default.';
    titleDefault = 'Default!';
    textInfo = 'Você tem uma reunião agendada às 10:30h.';
    titleInfo = 'Lembrete!';
    textSuccess = 'Você acabou de cadastrar seu currículo com sucesso.';
    titleSuccess = 'Parabéns!';
    textWarning = 'Os dados apresentados nessa tela podem sofrer alterações.';
    titleWarning = 'Atenção!';
    textDanger = 'Ocorreu um erro! Não foi possível salvar o registro.';
    titleDanger = 'Desculpe!';
    
    break;
}

//Selecão de Idioma
document.querySelector('#idiom').addEventListener('change', function () {

  var origin = window.location.origin;

  switch (this.value) {

    case 'en':
      window.location = origin + '/notifier/docs/en/index.html';
      break;
    case 'pt_br':
      window.location = origin + '/notifier/docs/pt_br/index.html';
      break;

  }

});

document.querySelector('#btn-default').addEventListener('click', function () {
  notifier.show(titleDefault, textDefault, '', '', 0);
}, false);

document.querySelector('#btn-info').addEventListener('click', function () {
  notifier.show(titleInfo, textInfo, 'info', '', 0);
}, false);

document.querySelector('#btn-success').addEventListener('click', function () {
  notifier.show(titleSuccess, textSuccess, 'success', '', 0);
}, false);

document.querySelector('#btn-warning').addEventListener('click', function () {
  notifier.show(titleWarning, textWarning, 'warning', '', 0);
}, false);

document.querySelector('#btn-danger').addEventListener('click', function () {
  notifier.show(titleDanger, textDanger, 'danger', '', 0);
}, false);

//com icones
document.querySelector('#btn-default-i').addEventListener('click', function (){
  notifier.show(titleDefault, textDefault, '', '../../img/clock-48.png', 0);
}, false);

document.querySelector('#btn-info-i').addEventListener('click', function (){
  notifier.show(titleInfo, textInfo, 'info', '../../img/survey-48.png', 0);
}, false);

document.querySelector('#btn-success-i').addEventListener('click', function (){
  notifier.show(titleSuccess, textSuccess, 'success', '../../img/ok-48.png', 0);
}, false);

document.querySelector('#btn-warning-i').addEventListener('click', function () {
  notifier.show(titleWarning, textWarning, 'warning', '../../img/medium_priority-48.png', 0);
}, false);

document.querySelector('#btn-danger-i').addEventListener('click', function () {
  notifier.show(titleDanger, textDanger, 'danger', '../../img/high_priority-48.png', 0);
}, false);

//com temporizador
document.querySelector('#btn-default-temp').addEventListener('click', function () {
  notifier.show(titleDefault, textDefault, '', '../../img/clock-48.png', 4000);
}, false);

document.querySelector('#btn-info-temp').addEventListener('click', function () {
  notifier.show(titleInfo, textInfo, 'info', '../../img/survey-48.png', 4000);
}, false);

document.querySelector('#btn-success-temp').addEventListener('click', function () {
  notifier.show(titleSuccess, textSuccess, 'success', '../../img/ok-48.png', 4000);
}, false);

document.querySelector('#btn-warning-temp').addEventListener('click', function () {
  notifier.show(titleWarning, textWarning, 'warning', '../../img/medium_priority-48.png', 4000);
}, false);

document.querySelector('#btn-danger-temp').addEventListener('click', function () {
  notifier.show(titleDanger, textDanger, 'danger', '../../img/high_priority-48.png', 4000);
}, false);

//abrir e fechar
var notificationId;
var showNotification = function () {
  notificationId = notifier.show(titleInfo, textInfo, '', '../../img/survey-48.png', 4000);
};
var hideNotification = function () {
  notifier.hide(notificationId);
};
document.querySelector('#btn-nt-show').addEventListener('click', showNotification);
document.querySelector('#btn-nt-hide').addEventListener('click', hideNotification);