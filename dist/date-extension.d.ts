interface Date {
    addSeconds: (seconds: number) => Date;
    addMinutes: (minutes: number) => Date;
    addHours: (hours: number) => Date;
    addDays: (days: number) => Date;
    addWeeks: (weeks: number) => Date;
    addMonths: (months: number) => Date;
    addYears: (years: number) => Date;
    toFormatString: (format: string) => string;
    getDaysInMonth: (month: number, year: number) => number;
    getCurrentAge: () => number;
    countAge: (birthday: string) => number;
}
