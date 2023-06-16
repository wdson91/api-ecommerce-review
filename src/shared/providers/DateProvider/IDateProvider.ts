import dayjs from 'dayjs';

export interface IDateProvider {
    addDays(days: number): dayjs.Dayjs;
}
