import { gql } from "apollo-server-express";

const Schema = gql`
    type Td {
        _id: ID!
        name: String
        group: String
    }
    type User {
        _id: ID!
        name: String
        group: String
    }
    type Query {
        getAllTd: [Td]
        getTd(_id: ID): Td
        getAllUser: [User]
        getUser(id: Int): User
    }
    type Mutation {
        addTd(name:String,group:String): Td
        addUser(name:String,mail:String,group:String): Td
    }
`;
export default Schema;
