import User from './models/User.js'
import Role from './models/Role.js'

class authController {
    async registration(request, response) {
        try {}
        catch(e) {}
    }

    async login(request, response) {
        try {}
        catch(e) {}
    }

    async getUsers(request, response) {
        try {
            const userRole = new Role()
            const adminRole = new Role({value: "admin"})
            await userRole.save()
            await adminRole.save()
            response.json('Server work')
        }
        catch(e) {}
    }
}

export default authController