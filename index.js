/*
 * @file
 * @desc get module npm version
 * @date 2017/12/24
 *
 */

module.exports = name => {
	try {
		let config = {
			stdio: ['pipe', 'pipe', 'ignore']
		}

		let version = require('child_process').execSync(`npm view ${name} version`, config)
		version = version.toString().trim().replace(/^\n*/, '').replace(/\n*$/, '')

		return version
	} catch (e) {
		console.error(e)
	}
}