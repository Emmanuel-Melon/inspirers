export const buttonColors = {
  Progress: "brand.secondary",
  Blocked: "brand.danger",
  Review: "blue",
  Pending: "brand.accent",
  Approved: "brand.success",
};

export const copyLink = async (text: string) => {
  if ("clipboard" in navigator) {
      return navigator.clipboard.writeText(text);
  } else {
      return document.execCommand("copy", true, text);
  }
}