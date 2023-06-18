import AdapterJalali from "@date-io/date-fns-jalali";

class CustomString extends String {
    charAt(_: number): string {
        return this.valueOf();
    }
}

const weekDays = ['شنبه', 'یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه'];
const customWeekDays = weekDays.map((day) => new CustomString(day) as string);

export class AdapterJalaliCustom extends AdapterJalali {
    getWeekdays = (): string[] => customWeekDays;
}