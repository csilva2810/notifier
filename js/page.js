var text = '';

document.querySelector('#btn-default').addEventListener('click', function(){
  text = 'Olá! Sou uma notificação Default.';
  notifier.show('Default!', text, '', 'img/clock-48.png', 0);
}, false);

document.querySelector('#btn-info').addEventListener('click', function(){
  text = 'Você tem uma reunião agendada às 10:30h.';
  notifier.show('Lembrete!', text, 'info', 'img/survey-48.png', 0);
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