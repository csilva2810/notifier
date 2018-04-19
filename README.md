# Notifier
Notifications library made with VanillaJS.

## Instalation
```shell
npm install notifier-js
```

## Usage

### Default Notifications
```javascript
// my-script.js
import notifier from 'notifier-js'

notifier.show('Hello!' , 'I am a default notification.');
notifier.show('Reminder!', 'You have a meeting at 10:30 AM.');
notifier.show('Well Done!', 'You just submit your resume successfuly.');
notifier.show('Warning!' , 'The data presented here can be change.');
notifier.show('Sorry!', 'Could not complete your transaction.');
```

### Notifications with icons
```javascript
import notifier from 'notifier-js'

notifier.show('Default!' , 'I am a default notification.', '', 'img/clock-48.png', 0);
notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', '', 'img/survey-48.png', 0);
notifier.show('Well Done!', 'You just submit your resume successfuly.', '', 'img/ok-48.png', 0);
notifier.show('Warning!' , 'The data presented here can be change.', '', 'img/medium_priority-48.png', 0);
notifier.show('Sorry!', 'Could not complete your transaction.', '', 'img/high_priority-48.png', 0);
```

### Auto Dismissable Notifications
```javascript
import notifier from 'notifier-js'

notifier.show('Default!' , 'I am a default notification.', '', 'img/clock-48.png', 4000);
notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', '', 'img/survey-48.png', 4000);
notifier.show('Well Done!', 'You just submit your resume successfuly.', '', 'img/ok-48.png', 4000);
notifier.show('Warning!' , 'The data presented here can be change.', '', 'img/medium_priority-48.png', 4000);
notifier.show('Sorry!', 'Could not complete your transaction.', '', 'img/high_priority-48.png', 4000);
```

### Programmatically closing a notification
```javascript
import notifier from 'notifier-js'

let notificationId;
const showNotification = function () {
    notificationId = notifier.show('Reminder!', 'You have a meeting at 10:30 AM.', '', 'img/survey-48.png', 4000);
};
const hideNotification = function () {
    notifier.hide(notificationId);
};

document.querySelector('#show-button').addEventListener('click', showNotification);
document.querySelector('#hide-button').addEventListener('click', hideNotification);
```

Click [here](http://csilva2810.github.io/notifier/docs/en/index.html) to se the complete usage reference.
