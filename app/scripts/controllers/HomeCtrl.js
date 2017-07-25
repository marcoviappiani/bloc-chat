(function(){
    function HomeCtrl($uibModal,Room, Message) {
        this.rooms = Room.all;
//        console.log(Room.all);
        
        this.activeRoom = {};
        this.activeRoom.name = null;
        this.activeRoom.messages = null;
        
        
        this.loadMessages = function(selectedRoom) {
            this.activeRoom.name = selectedRoom.name;            
            this.activeRoom.messages = Message.getRoomId(selectedRoom.$id);
        };
        
        this.openModal = function(size, template){
            console.log('opening modal');
            $uibModal.open({
                animtion: true,
                templateUrl: template || '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                backdrop: 'static'
            });
        };    
    }
    
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal','Room', 'Message', HomeCtrl]);
})();