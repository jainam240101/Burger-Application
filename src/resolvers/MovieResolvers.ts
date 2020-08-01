import { Resolver, InputType, Field, Int, Mutation, Arg, Query } from "type-graphql"

//Fake Database
const Movie:any=[]

@InputType()
class MovieInput {
    @Field(()=>String)
    title!: String;

    @Field(() => Int)
    minutes!: number;
}

@Resolver(MovieInput)
export class MovieResolver{
    @Mutation(() => String)
    async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
        Movie.push(options)
        console.log(Movie   )
        return "It Is Working";
    }
    @Query(() => String)
    movies() {
        console.log(Movie)
        return "All Movies listed on Console"
    }
}
