(function(){
    function ModalCtrl($uibModalInstance, Room) {
        
        var vm = this;
        
        //input field in the modal
        this.roomName = '';
        
        this.ok = function() {
//            console.log('room name: ', vm.roomName);
//            alert("your roomName is" + vm.roomName);
            Room.add({
                name: this.roomName
            });
            
            $uibModalInstance.close(vm.roomName);
        };
        
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
      
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance','Room', ModalCtrl]);
})();




// - Room object outside of service.
// decide whether to use vm or this. then use it everywhere.
// - styling


