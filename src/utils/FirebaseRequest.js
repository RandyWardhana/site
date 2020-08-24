import _ from 'lodash'
import { v4 } from 'uuid'

import firebase from './Firebase'

const getMeta = async () => {
  try {
    let snapshot = await firebase.database().ref(`meta/`).once('value')
    return snapshot.val()
  } catch (e) {
    throw e
  }
}

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
  let fileName = v4()

  try {
    let snapshot = await firebase.storage().ref(`/projects/${fileName}`).put(file)
    let getURL = await firebase.storage().ref('projects').child(fileName).getDownloadURL()
  } catch (e) {
    throw e
  }
}

export { getMeta, getHeader, getSkills, getProjects, storeImage }