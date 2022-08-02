// import axios from 'axios';
import {useToast} from "vue-toast-notification";

export class HttpService {
    /**
     *
     * @param {String} baseUrl
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
     *
     * @param {!String} url - Relative Url
     * @param {?Object} parameters - Get Parameters
     * @returns {Promise<Object>}
     */
    async get(url, parameters) {
        return await fetch(this.baseUrl + url + '?' + new URLSearchParams(parameters), {method: 'get'}).then(
            response => {
                console.log(response);
                return this.handleResponse(response, false);
            }).catch(error => {
            return this.handleError(error);
        });

        // return axios.get(this.baseUrl + url, {params: parameters}).then(response => {
        //     return this.handleResponse(response,false);
        // }).catch(error => {
        //     return this.handleError(error);
        // });
    }

    /**
     *
     * @param {!String} url - Relative Url
     * @param {?Object} data - Post Body
     * @returns {Promise<Object>}
     */
    async post(url, data) {
        return await fetch(this.baseUrl + url,{method:'POST',body:JSON.stringify(data),headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }}).then(response => {
            return this.handleResponse(response, true);
        }).catch(error => {
            return this.handleError(error);
        });
    }

    /**
     *
     * @returns {Object} toast
     */
    getToast() {
        return useToast({
            position: "bottom",
            duration: 5000,
            queue: false
        });
    }

    /**
     *
     * @param {Object} response
     * @function response.json()
     * @param {Object} response.data.result
     * @param {Boolean} response.data.isSuccessful
     * @param {String} response.data.exceptionMessage
     * @param {Boolean} needSuccessMessage - for showing success Message or not
     * @returns {Promise<never>|*}
     */
    async handleResponse(response, needSuccessMessage) {
        return await response.json().then(json => {
            if (json.isSuccessful) {
                if (needSuccessMessage && needSuccessMessage === true) {
                    this.getToast().success("success");
                }
                return json.result;
            } else {
                return Promise.reject(json.exceptionMessage);
            }
        });
    }

    /**
     *
     * @param {String} error
     * @returns {Promise<never>}
     */
    handleError(error) {
        this.getToast().error(error);
        return Promise.reject(error);
    }
}