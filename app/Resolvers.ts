import Td from './models/td'
import User from './models/user';

const Resolvers = {
    Query: {
        getAllTd: async () => {
          const tds = await Td.find({});
          return tds;
        },

        getTd: async (_:any, args: any) => {
             const td = await Td.findById(args._id);
             return td;
        },
        getAllUser: async () => {
          const users = await User.find({});
          return users;
        },

        getUser: async (_:any, args: any) => {
            const user = await User.findById(args._id);
            return user;
        },
    },
    Mutation: {
        //create our mutation:
        addTd: (_: any, args: any) => {
          const {name,group} = args
          const newTd = new Td ({
            name, //name field
            group //group field
          });
          newTd.save()
          return newTd; //return the new object's result
        },
        addUser: (_: any, args: any) => {
          const newTd = {
            name: args.name, //name field
            mail: args.name, //mail field
            group: args.group, //group field
          };
          //Td.push(newTd);
          return newTd; //return the new object's result
        },
      },
};

export default Resolvers