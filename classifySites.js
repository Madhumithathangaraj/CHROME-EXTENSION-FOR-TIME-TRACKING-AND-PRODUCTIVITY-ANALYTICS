const siteCategories = {
  productive: ["leetcode.com", "github.com", "stackoverflow.com"],
  unproductive: ["facebook.com", "instagram.com", "youtube.com"],
};

function classifySite(hostname) {
  if (siteCategories.productive.includes(hostname)) return "Productive";
  if (siteCategories.unproductive.includes(hostname)) return "Unproductive";
  return "Neutral";
}

export default classifySite;
