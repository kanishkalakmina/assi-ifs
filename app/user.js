function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, name: "User" + id });
    }, Math.random() * 1000);
}

function fetchUserData(userIds){
    const userPromises = userIds.map(id => {
        return new Promise((resolve, reject) => {
            getUser(id, user => {
                if(user) {
                    resolve(user);
                }
                else {
                    reject("User not found");
                }
            });
        });
    });

    Promise.all(userPromises)
        .then(users => {
            if(users.length === 0){
                console.log("No users found");
            }
            else {
                console.log(users);
            }
        })
        .catch(err => {
            console.log(err);
            throw new Error(err);
        });
}

fetchUserData([1, 2, 3, 4, 5]);