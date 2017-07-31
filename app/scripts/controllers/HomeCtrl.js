(function(){
    function HomeCtrl($uibModal,Room, Message, $cookies, $scope) {
        this.rooms = Room.all;
//        console.log(Room.all);
        
        this.activeRoom = {};
        this.activeRoom.name = null;
        this.activeRoom.messages = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        
        
        // alias `this`
        var _this = this;

        $scope.$watch(function(){
            return $cookies.get('blocChatCurrentUser');
        },function(){
            _this.currentUser = $cookies.get('blocChatCurrentUser');
        });
        
        
        this.loadMessages = function(selectedRoom) {
            this.activeRoom.name = selectedRoom.name;            
            this.activeRoom.messages = Message.getRoomId(selectedRoom.$id);
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