import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import { last } from 'lodash';
import { nanoid } from 'nanoid'

const firebaseConfig = {
    apiKey: "AIzaSyCY_qZUUg6maIIfB6FLoIZg0Dlzi9WA314",
    authDomain: "miss-echo.firebaseapp.com",
    projectId: "miss-echo",
    storageBucket: "miss-echo.appspot.com",
    messagingSenderId: "535338486539",
    appId: "1:535338486539:web:ee1a5f74c6be29901fb00e",
    measurementId: "G-HM6NGQZXSW"
};
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore
export const storage = firebase.storage;
export const uploadStorage = (path: string, file: File,): Promise<string> => {
    return new Promise((resolve, reject) => {
        const uploadTask = storage().ref().child(path + '/' + nanoid() + '.' + last(file.name.split('.'))).put(file, {
            contentType: file.type
        })

        uploadTask.on(storage.TaskEvent.STATE_CHANGED, {
            'complete': function () {
                console.log('upload complete!');
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL: string) => {
                    // resolve(downloadURL.replace('firebasestorage.googleapis.com', 'firestore.bgmotion.com.tw'))
                    resolve(downloadURL)
                });
            }
        });


    })
}
export const removeStorage = (fileUrl: string) => {
    return new Promise<void>((resolve, reject) => {
        if (fileUrl === '') {
            resolve()
        }

        storage().ref().child(decodeURIComponent(last(fileUrl.split('/'))?.split('?')[0] ?? '')).delete()
            .then(() => resolve())
            .catch(() => resolve());
    })
}
export const handleCacheError = (payload: Event) => {
    console.log("🚀 ~ file: firebase.ts ~ line 50 ~ handleCacheError ~ payload", payload)
    const firestore_url = 'https://firebasestorage.googleapis.com/';
    const imgElement = payload.target as HTMLImageElement
    if (imgElement && imgElement.nodeName==='IMG' && imgElement.src.indexOf('v0') > -1) {
        
        const object_path = imgElement.src.split('v0')[1]
        imgElement.src = `${firestore_url}v0${object_path}`
    }


}

export const auth = firebase.auth
export const signOut = () => {
    return new Promise<void>((resolve, reject) => {
        auth().signOut().then(() => {
            resolve()
        })
    })
}
