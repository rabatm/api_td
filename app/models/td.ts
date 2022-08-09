import { model, Schema, Model, Document } from 'mongoose';

interface ITd extends Document {
  name: string;
  group: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  group: { type: String, required: true },
});

export default model<ITd>('Td', UserSchema);