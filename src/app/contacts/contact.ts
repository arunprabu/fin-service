export interface IContact {
    id: number;
    name: string;
    phone: string;
    email: string;
}

export class Contact implements IContact {
    id: number;
    name: string;
    phone: string;
    email: string;

    // util methods can come here
}
