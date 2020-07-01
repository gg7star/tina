import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

const USER_TABLE_NAME = 'users';

export async function createAccount({credential, signupInfo}) {
  const { firstName, lastName, email, birthday } = signupInfo;
  const user = credential.user._user;
  const { uid } = user;
  if (uid) {
    var userData = {
      uid,
      actived: true,
      signedUp: firebase.database.ServerValue.TIMESTAMP,
      lastLoggedIn: firebase.database.ServerValue.TIMESTAMP,
      isSocialUser: false,
      firstName,
      lastName,
      birthday: birthday || '',
      ...user
    };
    try {
      return firebase.database().ref(`${USER_TABLE_NAME}/${uid}`)
        .set(userData).then(() => {
          return userData;
        });
    } catch (e) {
      console.log('==== error: ', e)
      return null
    }
  }
  return null;
}

export function getUserInfo(uid) {
  return firebase.database()
    .ref(`users/${uid}`)
    .once('value')
    .then((snapshot) => {
      if (snapshot.exists) return snapshot.val();
      else return null;
    }
  );
}

export function getCurrentUserInfo() {
  const uid = firebase.auth().currentUser.uid;
  return getUserInfo(uid)
}

export async function findUserByEmail(email) {
  var items = [];
  firebase.database()
    .ref(`users`)
    .orderByChild("email")
    .startAt(email)
    .endAt(email)
    .on('value', (snap) => {
      items = [];
      snap.forEach((child) => {
        items.push(child);
      });
      console.log('==== items: ', items);
      return items;
    });
  return items;
}

export async function createDummyJSON(){
  let maps = {
      "ordinateur":{
        "root":{
          "qid":"-MB4fBwDHDo37X5UIaKn",
          "title":"Is your computer Windows?",
          "yid":"-MB4fLmbHFnsrgAoTOgD",
          "nid":"-MB4fPazOcmCyTsISq5J",
          "did":"-MB4fS_ab6Tw0f5_ySOW"
        },
        "-MB4fLmbHFnsrgAoTOgD":{
        "qid":"-MB4fLmbHFnsrgAoTOgD",
        "title":"Operating system is Windows7?",
        "yid":"-MB4gxTDW3gXOwPXYmyF",
        "nid":"-MB4gyUif5B_NG4qLurg",
        "did":"-MB4gzZqV1vIOpzu8cB4"
        },
        "-MB4gxTDW3gXOwPXYmyF":{
          "qid":"-MB4gxTDW3gXOwPXYmyF",
          "title":"Do you have antivirus program installed?",
          "yid":"-MB4hmTUuOq19lLND0KT",
          "nid":"-MB4hnbbZZ-NEuGUhtQO",
          "did":"-MB4hoiEYQPVDxHYu7Yc"
        },
        "-MB4hmTUuOq19lLND0KT":{
          "qid":"-MB4hmTUuOq19lLND0KT",
          "title":"Is the real-time check turned on?",
          "yid":"-MB4iUoqLRgCIB7MM2-M",
          "nid":"-MB4iVnD6bba4d_TgoBQ",
          "did":"-MB4iX8DLVKzV4PsMxRY"
        },
        "-MB4iUoqLRgCIB7MM2-M":{
          "solution":"Please turn off the real-time check and start the program as you want."
        },
        "-MB4iVnD6bba4d_TgoBQ":{
          "solution":""
        },
        "-MB4iX8DLVKzV4PsMxRY":{
          "solution":""
        },
        "-MB4hnbbZZ-NEuGUhtQO":{
          "solution":"Please try to install anti-virus program."
        },
        "-MB4hoiEYQPVDxHYu7Yc":{
          "solution":""
        },
        "-MB4gyUif5B_NG4qLurg":{
          "solution":"Hi, this is dummy solution for testing. Thanks."
        },
        "-MB4gzZqV1vIOpzu8cB4":{
          "solution":"Hi, this is the solution you are looking for."
        },
        "-MB4fPazOcmCyTsISq5J":{
          "qid":"-MB4fPazOcmCyTsISq5J",
          "title":"Is your computer MAC OS?",
          "yid":"-MB6jxDzmRlV-Epcunj2",
          "nid":"-MB6li8sSGdltuZvTljp",
          "did":"-MB6k-5bngaA3a4FST9U"
        },
        "-MB6jxDzmRlV-Epcunj2":{
          "solution":"Please try to restart your PC. This way you can reset all the running process and make it working!"
        },
        "-MB6li8sSGdltuZvTljp":{
          "qid":"-MB6li8sSGdltuZvTljp",
          "title":"Is your computer Ubuntu?",
          "yid":"-MB6kpnFcw9EHOOt-IF9",
          "nid":"-MB6kr3cuPL9TwxodmR7",
          "did":"-MB6ksTkhQz6AWVsaic9"
        },
        "-MB6kpnFcw9EHOOt-IF9":{
          "solution":"Please try to using the 'sudo apt install' command and see if everything works."
        },
        "-MB6kr3cuPL9TwxodmR7":{
          "solution":""
        },
        "-MB6ksTkhQz6AWVsaic9":{
          "solution":""
        },
        "-MB6k-5bngaA3a4FST9U":{
          "solution":""
        },
        "-MB4fS_ab6Tw0f5_ySOW":{
          "solution":""
        }
      }
  }

  try {
    return firebase.database().ref(`maps`)
      .set(maps).then(() => {
        return null;
      });
  } catch (e) {
    console.log('==== error: ', e)
    return null
  }
}

export async function getQuestionByCategoryAndId(category, id){
  return firebase.database()
    .ref(`maps/${category}/${id}`)
    .once('value')
    .then((snapshot) => {
      if (snapshot.exists) return snapshot.val();
      else return null;
    });
}