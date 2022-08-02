import {HttpService} from "@/service/HttpService";
import Option from "@/common/option";

export class PersonService {
    baseUrl = Option.PERSON_BASE_URL;
    httpService = new HttpService(this.baseUrl);

    findAll(page, size) {
        const parameters = {
            size: size,
            page: page - 1
        }
        return this.httpService.get('/findAll.do', parameters);
    }

    findOne(id) {
        const parameters = {
            id: id
        }
        return this.httpService.get('/findOne.do', parameters);
    }

    save(person) {
        return this.httpService.post('/save.do', person);
    }

    remove(id) {
        return this.httpService.post('/' + id + '/delete.do', null);
    }
}