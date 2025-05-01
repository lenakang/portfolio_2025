export default function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (section) {
    const rootStyle = getComputedStyle(document.documentElement);
    const heightInRem = rootStyle.getPropertyValue("--height").trim();
    const rootFontSize = parseFloat(rootStyle.fontSize);
    const heightInPx = parseFloat(heightInRem) * rootFontSize;
    const top = section.offsetTop - heightInPx;

    window.scrollTo({ top, behavior: "smooth" });
  }
}
