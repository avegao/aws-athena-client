import {Query} from './Query';

export class Queue {
    public queries: Query[] = [];

    public addQuery(query: Query): void {
        if (query.id == null || query.id === '') {
            query.id = query.athenaId;
        }

        this.queries.push(query);
    }

    public removeQuery(query: Query): void {
        const index = this.queries.indexOf(query);

        if (index > -1) {
            this.queries.splice(index, 1);
        }
    }

    public getQueryById(id: string): Query {
        for (const query of this.queries) {
            if (id === query.id) {
                return query;
            }
        }

        throw new Error('Query ID not found');
    }
}
