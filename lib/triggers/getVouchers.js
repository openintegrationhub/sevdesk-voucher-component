/**
 * Auto-generated trigger file for "sevDesk Receipt API" API.
 *
 * Generated at: 2021-10-14T12:58:35.325Z
 * Mass generator version: 1.0.0
 *
 * : sevdesk-voucher-component
 * Copyright © 2020,  AG
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'getVouchers'
 * Endpoint Path: '/Voucher'
 * Method: 'get'
 *
 */

 const Swagger = require('swagger-client');
 const spec = require('../spec.json');
 
 // this wrapers offers a simplified emitData(data) function
 module.exports = {process: processTrigger};
 
 // parameter names for this call
 const PARAMETERS = [
    "status",
    "creditDebit",
    "descriptionLike",
    "startDate",
    "endDate",
    "contact[id]",
    "contact[objectName]"
];
 
 // mappings from connector field names to API field names
 const FIELD_MAP = {
    "status": "status",
    "creditDebit": "creditDebit",
    "descriptionLike": "descriptionLike",
    "startDate": "startDate",
    "endDate": "endDate",
    "contact_id_": "contact[id]",
    "contact_objectName_": "contact[objectName]"
};
 
 function processTrigger(msg, cfg) {
     var isVerbose = process.env.debug || cfg.verbose;
 
     console.log("msg:",msg);
     console.log("cfg:",cfg)
 
     if (isVerbose) {
         console.log(`---MSG: ${JSON.stringify(msg)}`);
         console.log(`---CFG: ${JSON.stringify(cfg)}`);
         console.log(`---ENV: ${JSON.stringify(process.env)}`);
     }
 
     const contentType = undefined;
 
     const body = msg.data;
     mapFieldNames(body);
 
     let parameters = {};
     for(let param of PARAMETERS) {
         parameters[param] = body[param];
     }
 
     const oihUid = msg.metadata !== undefined && msg.metadata.oihUid !== undefined
     ? msg.metadata.oihUid
     : 'oihUid not set yet';
   const recordUid = msg.metadata !== undefined && msg.metadata.recordUid !== undefined
     ? msg.metadata.recordUid
     : undefined;
   const applicationUid = msg.metadata !== undefined && msg.metadata.applicationUid !== undefined
     ? msg.metadata.applicationUid
     : undefined;
 
     const newElement = {};
     const oihMeta = {
       applicationUid,
       oihUid,
       recordUid,
     };
     
     // credentials for this operation
     let securities = {};
    securities['api_key'] = cfg['auth_api_key'];
 
     if(cfg.otherServer){
         if(!spec.servers){
             spec.servers = [];
         }
         spec.servers.push({"url":cfg.otherServer})
     }
     
     
     let callParams = {
         spec: spec,
         operationId: 'getVouchers',
         pathName: '/Voucher',
         method: 'get',
         parameters: parameters,
         requestContentType: contentType,
         requestBody: body,
         securities: {authorized: securities},
         server: spec.servers[cfg.server] || cfg.otherServer,
     };
         if(callParams.method === 'get'){
             delete callParams.requestBody;
         }
     
 
     if (isVerbose) {
         let out = Object.assign({}, callParams);
         out.spec = '[omitted]';
         console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
     }
 
     // Call operation via Swagger client
     return Swagger.execute(callParams).then(data => {

         delete data.uid;
         newElement.metadata = oihMeta;
         const response = JSON.parse(data.data);
         newElement.data = cfg.nodeSettings.arraySplittingKey !== undefined ? response[cfg.nodeSettings.arraySplittingKey] : response;
         if(Array.isArray(newElement.data)){
            for(let i = 0; i < newElement.data.length; i++ ){
                const newObject = newElement;
                newObject.data = newElement.data[i];
                this.emit("data",newObject)
            }
        } else {
        this.emit("data",newElement);
} 
     });
 }
 
 function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        obj = Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
        return obj
    }
 }