/**
 * CodigoController
 *
 * @description :: Server-side logic for managing codigoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  buscarTodo:function (req,res,next) {
    //next es un callback
    var params= req.allParams();
    console.log('params',params)
    if(params.busqueda==''){
      return res.notFound({mensaje:'No ingreso ningun parametro de busqueda'})
    }else{
      Codigo.find().where({

        or: [
          {
            nombreEmpresa: {
              contains: params.busqueda
            }
          },
          {
            nombreDepartamento:{
              contains :params.busqueda
            }
          },
          {
            codigo: {
              contains: params.busqueda
            }
          },
          {
            fecha: {
              contains: params.busqueda
            }
          },
          {
            nombrePrenda: {
              contains: params.busqueda
            }
          }

        ]

      }).exec(function(err, data) {
        if (err) return next(err);
        res.json(data);
      });
    }




  }

};

