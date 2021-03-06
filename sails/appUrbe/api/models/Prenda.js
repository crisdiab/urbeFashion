/**
 * Prenda.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:'string',
      required:true
    },

    codigo:{
      type:'string',
      unique:true
    },

    cantidadesPrenda:{
      collection:'Cantidad',
      via:'idPrenda'
    },
    estado:{
      type:'string',
      defaultsTo:'activo',
      enum:['activo','inactivo']
    }


  }
};

