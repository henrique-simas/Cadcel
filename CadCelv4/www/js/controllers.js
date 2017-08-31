angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('side-menu21Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cADASTROCtrl', ['$scope', '$http', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $state){
  $scope.enviacadastro = function(){
    var cnome;
    var crg;
    var cpf;
    var municipio;
    var uf;
    var opcao;
    var senha1;
    var senha2;

    cnome = document.getElementById("CNome").value;
    crg = document.getElementById("CRG").value;
    cpf = document.getElementById("CCPF").value;
    municipio = document.getElementById("CMunicipio").value;
    uf = document.getElementById("CUF").value;
    senha1 = document.getElementById("CSenha").value;
    if(CSenha.value == CConfirmacaoSenha.value){
      senha2 = document.getElementById("CConfirmacaoSenha").value;
    }
    var usuario = [cnome, crg, cpf, municipio, uf, senha2];

    var parameter = JSON.stringify({nome:cnome, cpf:cpf, rg:crg, municipio:municipio, uf:uf, senha:senha2});
    console.log(parameter);
    $http.post("Signup.php", parameter).
      success(function(data,status,headers,config)
      {
        $state.go("home");
      }).
      error(function(data,status,headers,config)
      {
        alert("Erro na conexão");
      })
      if(success=true)
      {
        alert('Bem vindo');
      }
      else
      {
        alert('Erro no cadastramento');
      }
  }
}])
   
.controller('menuUserCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cONSULTACtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('cadastrarDispositivoCtrl', ['$scope', '$http', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope,$http, $stateParams,$state) {
  $scope.cadastrodispositivo = function(){
    var cproprietario= document.getElementById('Cproprietario').value;
    var cemail= document.getElementById('Cemail').value;
    var ctelefone= document.getElementById('Ctelefone').value
    var cimei= document.getElementById('Cimei').value;
    var cnumeroBO = document.getElementById('CnumeroBO').value;
    var cdataBO = document.getElementById('CdataBO').value;
    var ccategoria = document.getElementById('Ccategoria').value;
    var cstatus = document.getElementById('Cstatus').value;
    var cadastrodispositivo= [cproprietario,cemail,ctelefone,cimei,cnumeroBO,cdataBO,ccategoria,cstatus];
    var parameter = JSON.stringify({proprietario:cproprietario, email:cemail, telefone:ctelefone, imei:cimei,
     numeroBO:cnumeroBO, dataBO:cdataBO, categoria:ccategoria, status:cstatus});
    console.log(parameter);
    $http.post("test.php", parameter).
    success(function(data,status,headers,config){
      if(data == true){
        $state.go("menuUser");
      }
      else{
        if(data == false){
          alert("Cadastro inválido");
        }
      }
    }).
    error(function(data,status,headers,config){
      console.log("Erro na conexão");
    });
  }
}])
   
.controller('loginCtrl', ['$scope', '$http', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $http, $stateParams, $state){
  $scope.envialogin = function(){
    var login = document.getElementById('LCPF').value;
    var senha = document.getElementById('LSenha').value;
    var parameter = JSON.stringify({cpf:login,senha:senha});
    $http.post("login.php", parameter).
    success(function(data,status,headers,config){
      if(data == true){
        $state.go("menu");
      }
      else{
        if(data == false){
          alert("Matrícula ou senha inválidas");
        }
      }
    }).
    error(function(data,status,headers,config){
      console.log("Erro na conexão");
    });
  }
}])
 