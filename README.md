# CHROME EXTENSION-FOR TIME TRACKING AND PRODUCTIVITY ANALYTICS

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : SUJEET KUMAR

*INTERN ID* : CT04DF1733

*DOMAIN* : FULL STACK WEB DEVELOPMENT

*DURATION* : 4 WEEKS

*MENTOR* : NEELA SANTOSH

*DISCRIPTION* :

This repository contains the source code for a Chrome Extension designed to help users track their time online, analyze their web usage habits, and boost digital productivity. The extension monitors which websites users visit and for how long, then classifies them as productive or unproductive and generates useful analytics reports. It’s built using modern web technologies and integrates with a backend server for storing and analyzing user data securely.

The goal of this extension is to promote digital self-awareness by allowing users to see where their time goes every day. It is particularly useful for students, remote workers, freelancers, and anyone trying to stay focused in the digital age.

🧱 Tech Stack
Frontend (Extension UI): HTML, CSS, JavaScript

Browser APIs: Chrome Tabs, Alarms, Storage, and Runtime APIs

Backend: Node.js with Express for storing and processing user data

Database: MongoDB for storing time logs, classifications, and weekly analytics

Data Communication: REST API for sending tracked data from the extension to the server

⚙️ How It Works
The extension runs in the background using a background.js script that listens for tab activity.

When the user opens or switches tabs, the extension records the current active domain and the time spent on it.

The data is sent periodically to the backend where it's stored and categorized.

Websites are tagged as either productive (e.g., leetcode.com, github.com) or unproductive (e.g., facebook.com, youtube.com) using a configurable list.

Users can open the extension popup or a separate dashboard page to view their statistics:

Total time spent per site

Productivity percentage (time spent on productive vs. unproductive websites)

Daily and weekly usage graphs

All data is user-specific and stored securely with optional login features planned.

📊 Features
✅ Tracks time spent on each website with accurate tab detection

✅ Works silently in the background, with minimal performance impact

✅ Classifies websites as productive or unproductive

✅ Weekly productivity reports and visual charts (via dashboard)

✅ Easy-to-use popup interface for quick insights

✅ Local and remote storage support (can sync with backend)

✅ Lightweight and privacy-focused (data only stored with consent)

*OUTPUT* :

