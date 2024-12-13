import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class BudgetItem {
  @Prop()
  icon?: string

  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  amount: number

  @Prop()
  description?: string
}

export const BudgetItemSchema = SchemaFactory.createForClass(BudgetItem)
