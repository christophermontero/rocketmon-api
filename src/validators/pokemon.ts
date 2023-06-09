import Joi from 'joi';
import { IGetPokemon, IGetPokemons } from '../domain/models/pokemon';

export const validateGetPokemons = (getPokemons: IGetPokemons) => {
  const getPokemonsSchema = Joi.object({
    limit: Joi.number().integer().multiple(10).min(10).max(100).default(10),
    offset: Joi.number().integer().min(0).default(0)
  }).required();

  return getPokemonsSchema.validate(getPokemons);
};

export const validateGetPokemonByName = (getPokemon: IGetPokemon) => {
  const getPokemonSchema = Joi.object({
    name: Joi.string()
      .regex(/^[a-z]+$/)
      .required()
  }).required();

  return getPokemonSchema.validate(getPokemon);
};
