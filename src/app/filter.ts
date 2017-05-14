/**
 * Filter
 * flteringf data by categories and state "top","latest" 
 * 
 */
export class Filter {
    constructor(public filter: string,
        public categories: Set<string>) {
    }
    /**
     * getAllCategories:
     * return categorySet
     */
    public static getAllCategories() {
        return new Set(['business', 'entertainment',
            'gaming', 'general',
            'music', 'politics',
            'science-and-nature', 'sport',
            'technology']);
    }
}

