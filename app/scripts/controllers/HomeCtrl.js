(function(){
    function HomeCtrl($uibModal,Room, Message, $cookies, $scope) {
        this.rooms = Room.all;
        
        this.activeRoom = {};
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.newMessage = '';
        
        
        // alias `this`
        var _this = this;

        $scope.$watch(function(){
            return $cookies.get('blocChatCurrentUser');
        },function(){
            _this.currentUser = $cookies.get('blocChatCurrentUser');
        });
        
        
        this.loadMessages = function(selectedRoom) {
            this.activeRoom = selectedRoom;
            this.activeRoom.messages = Message.getRoomId(selectedRoom.$id);
        };
        
        // sends a new Message
        this.sendMessage = function(messageText) {
            
            var newMessage = {};
            
            newMessage.content = messageText;
            newMessage.username = $cookies.get('blocChatCurrentUser');
            newMessage.roomId = this.activeRoom.$id;
            Message.send(newMessage);
            this.newMessage = '';
        };
        
        this.openModal = function(size, template){
            
            $uibModal.open({
                animation: true,
                templateUrl: template || '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                backdrop: 'static'
            });
        };    
    }
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal','Room', 'Message', '$cookies', '$scope', HomeCtrl]);
})();