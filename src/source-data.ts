import { User } from './app/models/user';
import data from './source-data.json';

export class SourceData {
  static users = data.users;
  static depots = data.depots;
  static depotFunctions = data.depotFunctions;
  static shifts = data.shifts;
}
