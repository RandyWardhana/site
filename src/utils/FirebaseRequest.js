import _ from 'lodash'

import firebase from './Firebase'

const getHeader = async () => {
  try {
    let snapshot = await firebase.database().ref(`header/`).once('value')
    return snapshot.val()
  } catch (e) {
    throw e
  }
}

const getSkills = async () => {
  try {
    let snapshot = await firebase.database().ref(`skills/`).once('value')
    return snapshot.val()
  } catch (e) {
    throw e
  }
}

const getProjects = async () => {
  try {
    let snapshot = await firebase.database().ref(`projects/`).once('value')
    return snapshot.val()
  } catch (e) {
    throw e
  }
}

const storeImage = async (file) => {
  let fileName = 'c7aba28b-fce9-4578-8606-0c96a268788f'

  try {
    let snapshot = await firebase.storage().ref(`/projects/${fileName}`).put(file)
    let getURL = await firebase.storage().ref('projects').child(fileName).getDownloadURL()
  } catch (e) {
    throw e
  }
}

export { getHeader, getSkills, getProjects, storeImage }