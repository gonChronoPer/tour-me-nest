export declare class User {
    id: string;
    email: string;
    password: string;
    fullName: string;
    isActive: boolean;
    checkFieldsBeforeInsert(): void;
    checkFieldsBeforeUpdate(): void;
}
