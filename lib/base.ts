// tslint:disable
/// <reference path="./custom.d.ts" />
/**
 * MTTA Ski Patrol Web Services API
 *          Web Services for Mt. Tahoma Trails Association Ski Patrol, supporting the following features:              - Manage Ski Patroller Information;             - Ski Patroller Login;             - Schedule Ski Patrol Duty Dates;             - Automatically approve and fill out time sheets;             - Sign in/out for Ski Patrol duty;             - Broadcast and Post Direct Messages to Ski Patrollers;             - (Future) Real-Time GPS Tracking of Patrollers;             - Other features to be added... suggestions wanted! :)
 *
 * OpenAPI spec version: 0.1.0
 * Contact: Ryan.Michael.Tate@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from './configuration'
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios'

export const BASE_PATH = 'http://localhost:4000/v1'.replace(/\/+$/, '')

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ',',
    ssv: ' ',
    tsv: '\t',
    pipes: '|',
}

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string
    options: any
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration | undefined

    constructor(
        configuration?: Configuration,
        protected basePath: string = BASE_PATH,
        protected axios: AxiosInstance = globalAxios,
    ) {
        if (configuration) {
            this.configuration = configuration
            this.basePath = configuration.basePath || this.basePath
        }
    }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: 'RequiredError' = 'RequiredError'
    constructor(public field: string, msg?: string) {
        super(msg)
    }
}
