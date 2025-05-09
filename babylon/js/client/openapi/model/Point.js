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
 * The Point model module.
 * @module model/Point
 * @version v0
 */
export class Point {
    /**
     * Constructs a new <code>Point</code>.
     * A point (3D coordinate) in space. Embedded in VRObject during serialization,  does not exist on its own.
     * @alias Point
     */
    constructor() { 
        
        
        /** x 
         * @type {Number} 
         */
        this.x = undefined;

        /** y 
         * @type {Number} 
         */
        this.y = undefined;

        /** z 
         * @type {Number} 
         */
        this.z = undefined;
        
        
        
        
        Point.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Point</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Point} obj Optional instance to populate.
     * @return {Point} The populated <code>Point</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Point();

            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
            if (data.hasOwnProperty('z')) {
                obj['z'] = ApiClient.convertToType(data['z'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Point</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Point</code>.
     */
    static validateJSON(data) {

        return true;
    }


}





export default Point;

