export default class DateUtils{

    public static stringToDate(date: string): Date{
        let regex = /\//gi;
        let dateFormat = date.split(' ')[0];
        dateFormat= dateFormat.replace(regex, '-').trim();
        return new Date(this.convertData(dateFormat));
    }

    public static convertData(date: string): string {
        let dateBroke = date.split('-');
        return dateBroke[2] +'-'+dateBroke[1] +'-'+dateBroke[0]
    }
}