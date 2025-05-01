export default function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) {
    const rootStyle = getComputedStyle(document.documentElement);
    const heightInRem = rootStyle.getPropertyValue("--height").trim();
    console.log("rootStyle", rootStyle);
    console.log("heightInRem", heightInRem);
  }
}
