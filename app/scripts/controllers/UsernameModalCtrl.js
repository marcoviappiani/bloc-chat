(function(){
    function ModalCtrl($uibModalInstance, $cookies) {
        
        this.userName = '';
        
        this.ok = function() {
            
            if(this.userName !== "" && this.userName !== " ") {
                $cookies.put('blocChatCurrentUser', this.userName);    
                $uibModalInstance.close(this.userName);
            }            
        };
        
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
      
    }
    
    angular
        .module('blocChat')
        .controller('UsernameModalCtrl', ['$uibModalInstance','$cookies', ModalCtrl]);
})();



