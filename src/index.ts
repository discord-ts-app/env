import dotenv from 'dotenv'
dotenv.config()

class Env {
	/**
	 * Get environment value
	 * @param {string} .env variable
	 */
	public get(key: string): string {
		return process.env[key] || ''
	}
}

export default new Env()
