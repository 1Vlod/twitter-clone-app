export function exploreMain() {
  return {type: "ExploreMain"}
}

export function homeMain() {
  return {type: "HomeMain"}
}

export function ownMain() {
  return {type: "OwnMain"}
}

export function otherUserPage(id) {
  return {
    type: "OtherUserPage",
    otherUserId: id,
  }
}