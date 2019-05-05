const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY'


function changeVisibility(location, visible) {
  return {
    type: CHANGE_VISIBILITY,
    location,
    visible
  }
}

export {
    CHANGE_VISIBILITY,
    changeVisibility
};