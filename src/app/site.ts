/**
 * Site
 */
export class Site {
    constructor(public id:string,
                public name:string,
                public description:string,
                public category:string,
                public url:string,
                public sortBysAvailable:Array<String>){
                    this.generateUrlToImg();
                }
    public urlToIMg:string;
    /**
     * generateUrlToImg:
     * generate icon fo site
     */
    private generateUrlToImg(){
        this.urlToIMg="https://icons.better-idea.org/icon?url="+this.url+"&size=70..120..200";
    }
}
