import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<validationToken>;

@Schema()
export class validationToken{
    @Prop({required: true})
    _id: string

    @Prop({required: true})
    email: string
}

export const ValTSchema = SchemaFactory.createForClass(validationToken);