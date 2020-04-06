import { getConnection } from '../connectionManager';

/**
* Get all the users.
**/
export async function getAll(req, res, next) {
  return await getConnection().select('*').from('users');
}