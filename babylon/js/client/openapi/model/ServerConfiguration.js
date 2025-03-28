/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient.js';

/**
 * The ServerConfiguration model module.
 * @module model/ServerConfiguration
 * @version v0
 */
export class ServerConfiguration {
    /**
     * Constructs a new <code>ServerConfiguration</code>.
     * @alias ServerConfiguration
     */
    constructor() { 
        
        ServerConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServerConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {ServerConfiguration} obj Optional instance to populate.
     * @return {ServerConfiguration} The populated <code>ServerConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServerConfiguration();

            if (data.hasOwnProperty('guestAllowed')) {
                obj['guestAllowed'] = ApiClient.convertToType(data['guestAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('createWorlds')) {
                obj['createWorlds'] = ApiClient.convertToType(data['createWorlds'], 'Boolean');
            }
            if (data.hasOwnProperty('maxSessions')) {
                obj['maxSessions'] = ApiClient.convertToType(data['maxSessions'], 'Number');
            }
            if (data.hasOwnProperty('sessionStartTimeout')) {
                obj['sessionStartTimeout'] = ApiClient.convertToType(data['sessionStartTimeout'], 'Number');
            }
            if (data.hasOwnProperty('sessionTimeout')) {
                obj['sessionTimeout'] = ApiClient.convertToType(data['sessionTimeout'], 'String');
            }
            if (data.hasOwnProperty('webSocketClientPath')) {
                obj['webSocketClientPath'] = ApiClient.convertToType(data['webSocketClientPath'], 'String');
            }
            if (data.hasOwnProperty('webSocketServerPath')) {
                obj['webSocketServerPath'] = ApiClient.convertToType(data['webSocketServerPath'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServerConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServerConfiguration</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sessionTimeout'] && !(typeof data['sessionTimeout'] === 'string' || data['sessionTimeout'] instanceof String)) {
            throw new Error("Expected the field `sessionTimeout` to be a primitive type in the JSON string but got " + data['sessionTimeout']);
        }
        // ensure the json data is a string
        if (data['webSocketClientPath'] && !(typeof data['webSocketClientPath'] === 'string' || data['webSocketClientPath'] instanceof String)) {
            throw new Error("Expected the field `webSocketClientPath` to be a primitive type in the JSON string but got " + data['webSocketClientPath']);
        }
        // ensure the json data is a string
        if (data['webSocketServerPath'] && !(typeof data['webSocketServerPath'] === 'string' || data['webSocketServerPath'] instanceof String)) {
            throw new Error("Expected the field `webSocketServerPath` to be a primitive type in the JSON string but got " + data['webSocketServerPath']);
        }

        return true;
    }


}



/**
 * @member {Boolean} guestAllowed
 */
ServerConfiguration.prototype['guestAllowed'] = undefined;

/**
 * @member {Boolean} createWorlds
 */
ServerConfiguration.prototype['createWorlds'] = undefined;

/**
 * @member {Number} maxSessions
 */
ServerConfiguration.prototype['maxSessions'] = undefined;

/**
 * @member {Number} sessionStartTimeout
 */
ServerConfiguration.prototype['sessionStartTimeout'] = undefined;

/**
 * @member {String} sessionTimeout
 */
ServerConfiguration.prototype['sessionTimeout'] = undefined;

/**
 * @member {String} webSocketClientPath
 */
ServerConfiguration.prototype['webSocketClientPath'] = undefined;

/**
 * @member {String} webSocketServerPath
 */
ServerConfiguration.prototype['webSocketServerPath'] = undefined;






export default ServerConfiguration;

