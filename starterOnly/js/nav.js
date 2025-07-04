export function editNav() {
  const tabsWrapper = document.getElementById("myTopnav");
  if (tabsWrapper.className === "topnav") {
    tabsWrapper.className += "responsive";
  } else {
    tabsWrapper.className = "topnav";
  }
}
