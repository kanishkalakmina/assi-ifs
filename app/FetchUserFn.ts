export const fetchUserData = async (userIds: number[]) => {
    try {
        const userPromises = userIds.map(id => {
            return new Promise<{ id: number, name: string }>((resolve) => {
                getUser(id, (user: { id: number, name: string }) => {
                    resolve(user);
                });
            });
        });

        const users = await Promise.all(userPromises);
        console.log("All users fetched:", users);
    } catch (err) {
        console.error("Error fetching users", err);
    }
}

// Simulated async API calls
function getUser(id: number, callback: (user: { id: number, name: string }) => void) {
    setTimeout(() => {
        callback({ id: id, name: "User" + id });
    }, Math.random() * 1000);
}
