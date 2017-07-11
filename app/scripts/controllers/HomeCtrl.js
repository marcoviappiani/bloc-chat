(function(){
    function HomeCtrl($uibModal,Room) {
        this.rooms = Room.all;
        console.log(Room.all);
        
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
        .controller('HomeCtrl', ['$uibModal','Room', HomeCtrl]);
})();