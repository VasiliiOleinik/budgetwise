import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from 'mongoose'
import { BudgetItem, BudgetItemSchema } from './budget-item.schema'

export type BudgetDocument = HydratedDocument<Budget>

@Schema()
export class Budget {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId

  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  income: string

  @Prop({ required: true })
  currency: string

  @Prop({ required: true })
  budgetType?: string

  @Prop({ default: Date.now })
  createdAt: Date

  @Prop({
    type: {
      essentialNeeds: [BudgetItemSchema],
      personalWants: [BudgetItemSchema],
      savings: [BudgetItemSchema],
    },
    default: {},
  })
  items: {
    essentialNeeds: BudgetItem[]
    personalWants: BudgetItem[]
    savings: BudgetItem[]
  }
}

export const BudgetSchema = SchemaFactory.createForClass(Budget)
