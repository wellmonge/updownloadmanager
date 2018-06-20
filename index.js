
import { Platform, NativeModules } from 'react-native';


export const postFormData = (config, successCallback, cancelCallback) => {
    if (Platform.OS === android) {
        NativeModules.UpdownloadManager.postFormData(config, successCallback, cancelCallback);
    }
}

export const openSelectDialog = (config, successCallback, cancelCallback) => {
    if (Platform.OS === android) {
        NativeModules.UpdownloadManager.openSelectDialog(config, successCallback, cancelCallback);
    }
}

export const showFile = (URLtoDownload) => {
    if (Platform.OS === android) {
        NativeModules.UpdownloadManager.showFile(URLtoDownload);
    }
}

export const downloadFile = (URLtoDownload) => {
    if (Platform.OS === android) {
        NativeModules.UpdownloadManager.downloadFile(URLtoDownload);
    }
}

export const teste = (message) => {
    if (Platform.OS === android) {
        NativeModules.UpdownloadManager.Teste(message);
    }
}