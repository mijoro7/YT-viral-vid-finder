function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('YouTube Search')
      .addItem('Search Videos', 'showDialog')
      .addToUi();
}

function showDialog() {
  const html = HtmlService.createHtmlOutputFromFile('YouTubeSearchDialog')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(html, 'YouTube Video Finder');
}

// Simulated YouTube API data (replace with actual API calls in a real environment)
const simulatedYouTubeData = [
    { id: "v1", title: "Cricket Highlights 1", views: 100000, likes: 5000, comments: 200 },
    { id: "v2", title: "Cricket News Update", views: 50000, likes: 2000, comments: 100 },
    { id: "v3", title: "Funny Cricket Moments", views: 75000, likes: 3500, comments: 150 },
    { id: "v4", title: "Cricket Tutorial for Beginners", views: 25000, likes: 1000, comments: 50 },
    { id: "v5", title: "Cricket World Cup Highlights", views: 200000, likes: 8000, comments: 300 },
    { id: "v6", title: "Learn Cricket Batting Techniques", views: 30000, likes: 1500, comments: 75 },
    { id: "v7", title: "Cricket Fielding Drills", views: 20000, likes: 900, comments: 40 },
    { id: "v8", title: "Cricket Bowling Tips", views: 22000, likes: 1100, comments: 60 },
    { id: "v9", title: "Cricket Fitness Training", views: 18000, likes: 800, comments: 35 },
    { id: "v10", title: "Cricket Psychology and Mindset", views: 15000, likes: 700, comments: 25 },
    { id: "v11", title: "Another Cricket Highlights Video", views: 120000, likes: 6000, comments: 250 },
];

function searchYouTube(category, maxResults) {
    // Simulate API call
    const filteredVideos = simulatedYouTubeData.filter(video =>
        video.title.toLowerCase().includes(category.toLowerCase())
    );

    return filteredVideos.slice(0, maxResults);
}

function processSearchResults(results) {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.clearContents();

  // Set headers
  sheet.appendRow(["Title", "Views", "Likes", "Comments"]);

  // Write data
  results.forEach(video => {
    sheet.appendRow([video.title, video.views, video.likes, video.comments]);
  });
}

// Included to be called from HTML
function getVideoData(category, maxResults){
  let results = searchYouTube(category, maxResults);
  processSearchResults(results);
}
