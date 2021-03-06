/**
 * Periodo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    periodo:{
      type: 'string',
      required:true
    },

    cantidadesPeriodo:{
      collection:'Cantidad',
      via:'idPeriodo'
    },
    estado:{
      type:'string',
      defaultsTo:'activo',
      enum:['activo','inactivo']
    }

  }
};

