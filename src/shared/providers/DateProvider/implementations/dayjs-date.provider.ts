import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { IDateProvider } from '../IDateProvider';

@Injectable()
export class DayjsProvider implements IDateProvider {
    private dayjs: dayjs.Dayjs;

    constructor() {
        this.dayjs = dayjs();
    }

    addDays(days: number): dayjs.Dayjs {
        return this.dayjs.add(days, 'days');
    }
}
