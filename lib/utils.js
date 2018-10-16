import fs from 'fs';

export function checkIffileExists(path){
	return fs.existsSync(path);
}