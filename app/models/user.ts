import { model, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
    nameUser: String, //prénom de l'eleve
    surnameUser: String, //nom de leleve
    groupeUSer: String, 
    mailUser: String, 
    p_idUser: String, 
    coursUser:[String],//ids des cours
    absUser:[String ],//date abs for student
    password: String, // password for login
    typeUser:String//type d'utilisateur (eleve/student/admin)
}

const UserSchema: Schema = new Schema({
    nameUser:  { type: String, required: true }, //prénom de l'eleve
    surnameUser:  { type: String, required: true }, //nom de leleve
    groupeUSer:   { type: String, required: true },//groupe
    mailUser:  { type: String, required: true },//mail de l'eleve
    p_idUser:  { type: String, required: true },//id du parent
    coursUser:[{ type: String }],//ids des cours
    absUser:[{ type: String }],//date abs for student
    password:  { type: String}, // password for login
    typeUser:{ type: String }//type d'utilisateur (eleve/student/admin)
});

export default model<IUser>('User', UserSchema);