import { Resolver, Query, Ctx } from "type-graphql";

import { User } from "../entities/User";
import { ApolloContext } from "../types";

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: ApolloContext): Promise<User | undefined> {
    const user = await ctx.connection.getRepository(User).findOne({});
    return user;
  }
}
