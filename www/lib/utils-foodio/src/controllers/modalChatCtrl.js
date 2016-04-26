let ctrl = ($scope, $uibModalInstance, hint, pusher, chatMessageApi, chatResolved, userResolved, userTypeResolved, onScrollResolved) => {

  return new class ctrl {

    constructor() {
      $scope.chat = chatResolved;
      $scope.messagesResponse = $scope.chat.messages;
      $scope.messages = $scope.messagesResponse.data;
      $scope.userType = userTypeResolved;
      $scope.onScroll = onScrollResolved;

      // Usuário que está no chat
      $scope.user = userResolved;

      $scope.message = {
        content: '',
        sending: false
      };

      // Ouve mensagens que chegam de outras pessoas no chat
      pusher.subscribe(`private-chat-${$scope.chat.id}`).bind('message:created', (response) => {
        let message = response.data;

        // Só ouve se mensagem for criada por outra pessoa
        if(message.user.id === $scope.user.id && $scope.userType === message.userable_type) {
          return false;
        }

        $scope.messages.push(message);
        hint.success(message.content, { title: `${message.user.name} diz:`});
      });
    }

    // Envia mensagem
    onKeyUp($event) {
      if($event.keyCode == 13 && !$event.shiftKey) {
        return this.send();
      }
    }

    send() {
      // Notifica view que mensagem está sendo enviada
      $scope.message.sending = true;

      // Grava referencia de variável para posteriormente editar a mensagem enviada, com
      // dados do horário que foi criado, por exemplo
      let index = $scope.messages.length;

      // Adiciona mensagem no scope
      // Fica com status 'enviando' até ser confirmado o envio
      $scope.messages.push({
        content: $scope.message.content,
        user: $scope.user
      });

      chatMessageApi.create($scope.chat, $scope.message).then((response) => {

        // Altera scope
        $scope.messages[index] = response.data;
        this._resetMessage();
      }, () => {
        // Houve erro no envio
      });
    }

    onScroll() {
      $scope.onScroll($scope.chat).then((response) => {
        $scope.chat = response.data;
        $scope.messagesResponse = $scope.chat.messages;
        $scope.messages = $scope.messagesResponse.data;
      });
    }

    close() {
      $uibModalInstance.dismiss('close');
    }

    _resetMessage() {
      $scope.message = {
        content: '',
        sending: false
      };
    }
  };
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'hint', 'pusher', 'chatMessageApi', 'chatResolved', 'userResolved', 'userTypeResolved'];
angular.module('utils.foodio').controller('ModalChatCtrl', ctrl);
