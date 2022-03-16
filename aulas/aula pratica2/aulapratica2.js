function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const usuarios = new Map();

usuarios.set('Mikael', 'Admin');
usuarios.set('Gabi', 'Admin');
usuarios.set('Victor', 'User');
usuarios.set('Elisa', 'Admin');
usuarios.set('Joger', 'User');

console.log(getAdmins(usuarios));