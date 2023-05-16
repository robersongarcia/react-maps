export const getUserLocation = async (): Promise<[number,number]> => {

    return new Promise((resolve, reject) => {

        //ask for permission
        navigator.permissions.query({name: 'geolocation'}).then((result) => {
            if (result.state === 'granted') {
                console.log('Permission granted');
            } else if (result.state === 'prompt') {
                console.log('Permission prompt');
            } else if (result.state === 'denied') {
                console.log('Permission denied');
            }
        });

        //get location
        
        
        
        navigator.geolocation.getCurrentPosition(({coords}) => {
            resolve([coords.longitude, coords.latitude]);
    }, (error) => {
        alert(error.message);
        console.log(error);
        reject();
    }

    )});
}