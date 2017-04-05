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
    }

  },
  beforeCreate: function(valoresCreados,cb){
    valoresCreados.descripcion= 'No tiene';

    cb();

  }

};

