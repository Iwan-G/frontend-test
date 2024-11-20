// ***DO NOT EDIT THIS PART
function randomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const userIds = [];
const userNames = [];
const userPhotos = [];
for (let i = 1; i <= 100000; i++) {
    userIds.push(i);
    userNames.push({ userId: i, name: randomString() });
    userPhotos.push({ userId: i, photo: `${randomString()}.png` });
}
// DO NOT EDIT THIS PART***

function generateUsersDetail(userIds, userNames, userPhotos) {
    const nameMap = Object.fromEntries(userNames.map(user => [user.userId, user.name]));
    const photoMap = Object.fromEntries(userPhotos.map(user => [user.userId, user.photo]));

    return userIds.map(userId => ({
        userId,
        fullName: nameMap[userId] || '',
        photo: photoMap[userId] || '',
    }));
}

// ***DO NOT EDIT THIS PART
console.time('generateUsersDetail');
generateUsersDetail(userIds, userNames, userPhotos);
console.timeEnd('generateUsersDetail');
// DO NOT EDIT THIS PART***