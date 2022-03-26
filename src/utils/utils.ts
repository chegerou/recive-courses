export default class Utils{

    public static formatData(data: Date){
        let dateFormat = data.toLocaleString();
        let regex = /\//gi;
        dateFormat = dateFormat.split(' ')[0];
        dateFormat= dateFormat.replace(regex, '-');
        return dateFormat;
    }

}