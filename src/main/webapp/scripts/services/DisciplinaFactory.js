angular.module('trabalho3Bimestre').factory('DisciplinaResource', function($resource){
    var resource = $resource('rest/disciplinas/:DisciplinaId',{DisciplinaId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});