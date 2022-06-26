import { Controller, Get, HttpCode, HttpException, HttpStatus, Param } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private moviesService: MoviesService) { }

    @Get()
    getMovies() {
        try {
            const movies = this.moviesService.getMoviesList();
            return movies
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }

    }

    @Get(':movieId')
    getMovieById(@Param('movieId') movieId){
        try {
            const movie = this.moviesService.getMovieById(movieId);
            return movie;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }
}
