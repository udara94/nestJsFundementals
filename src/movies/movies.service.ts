import { Injectable } from '@nestjs/common';
import { movies } from '../mock/movies';
import { Movie } from '../types/interfaces/movie';

@Injectable()
export class MoviesService {
    private moviesList: Movie[];
    constructor() {
        this.moviesList = movies;
    }
    getMoviesList(): Movie[] {
        return this.moviesList;
    }

    getMovieById(id: string): Movie {
        const movie = this.moviesList.find(movie => movie.id === id);
        if (!movie) {
            throw new Error("Could not find the movie");
        }
        return movie;
    }
}
