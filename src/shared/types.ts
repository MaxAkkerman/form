export interface IUser{
    id:number,
    name: string | null,
    age: number | null,
    subscription: TSubscription,
    employment:boolean
}

export type TSubscription = 'Subscribed' | 'Not Subscribed' | 'Other';
