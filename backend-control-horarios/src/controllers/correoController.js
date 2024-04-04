const {request, response} = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req=request,resp=response) => {
    let body = req.body;

    let config = nodeMailer.createTransport({
        host:'smtp.outlook.com',
        post:587,
        auth:{
            user:'ganttflow@outlook.com',
            pass:'Integradora6969Y$KanyeWest7468'
        }
    });
    
    const opciones = {
        from:'GanttFlow <ganttflow@outlook.com>',
        to:body.correo,
        subject:body.asunto,
        text:body.mensaje, 
    }

    
    config.sendMail(opciones,function(error,result){
        if(error){ 
            return resp.json({ok:false,msg:error, opciones:opciones})
        }
        return resp.json({
            ok:true,
            msg:result
        });
    })
}

module.exports = {
    envioCorreo
}