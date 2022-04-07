export default class Utils{

    public static formatData(data: Date): Date{
        let dateFormat = data.toLocaleString();
        let regex = /\//gi;
        dateFormat = dateFormat.split(' ')[0];
        dateFormat= dateFormat.replace(regex, '-').trim();
        return new Date(this.convertDataToAmericanWay(dateFormat));
    }

    public static convertDataToAmericanWay(data: string): string {
        let americanWay = data.split('-');
        return americanWay[2] +'-'+americanWay[1] +'-'+americanWay[0]
    }

}