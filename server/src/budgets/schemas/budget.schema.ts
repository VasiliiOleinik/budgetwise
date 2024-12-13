import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type BudgetDocument = HydratedDocument<Budget>;

@Schema()
export class Budget {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  income: string;

  @Prop({ required: true })
  currency: string;

  @Prop({required: true})
  budgetType?: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({
    type: [
      {
        icon: { type: String, required: false },
        title: { type: String, required: true },
        amount: { type: String, required: true },
        description: { type: String, required: false },
      },
    ],
    default: [],
  })
  items: {
    icon?: string;
    title: string;
    amount: string;
    description?: string;
  }[];
}

export const BudgetSchema = SchemaFactory.createForClass(Budget);
