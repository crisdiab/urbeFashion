/**
 * Codigo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    codigo:{
      type:'string',
      required:true,
      unique:true
    },

    estado:{
      type:'string',
      required:true,
      defaultsTo:'pendiente',
      enum:['pendiente', 'aprobado', 'reprobado']
    },

    nombreEmpresa:{
      type:'string',
      required:true
    },

    nombreDepartamento:{
      type:'string',
    },

    idEmpresaCodigo:{
      model:'Empresa'
    },
    descripcion:{
      type:'string'
    },

    fecha:{
      type:'string'
    },
    nombrePrenda:{
      type:'string'
    }

  },

  beforeCreate: function(valoresCreados,cb){

    valoresCreados.descripcion= 'No tiene';

    var nombrep=valoresCreados.codigo;
    console.log('nomrep',nombrep.substring(2,4));

    var np;
    Prenda
      .find({
      codigo:nombrep.substring(2,4)
    })
      .exec(function(err,prendaEncontrada){
        if(err){
          return res.serverError({mensaje:err})
        }
       np=prendaEncontrada[0].nombre;
        valoresCreados.nombrePrenda=np
        console.log(np)
        console.log(valoresCreados.nombrePrenda)
        cb();
      });


  }

};

