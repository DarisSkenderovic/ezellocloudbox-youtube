{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf610
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('uploadForm').addEventListener('submit', function(event) \{\
  event.preventDefault();\
\
  // Get form data\
  const title = document.getElementById('videoTitle').value;\
  const videoUrl = document.getElementById('videoUrl').value;\
  const thumbnailUrl = document.getElementById('thumbnailUrl').value;\
\
  // Simulate the upload process\
  uploadToYouTube(title, videoUrl, thumbnailUrl);\
\});\
\
function uploadToYouTube(title, videoUrl, thumbnailUrl) \{\
  // Display a loading status\
  document.getElementById('status').innerHTML = 'Uploading video...';\
\
  // Simulate uploading the video\
  setTimeout(function() \{\
    // After the simulated upload, update the status\
    document.getElementById('status').innerHTML = `Video "$\{title\}" uploaded successfully!`;\
\
    // You can also perform actual API calls here to YouTube for a real upload\
    console.log('Video Title:', title);\
    console.log('Video URL:', videoUrl);\
    console.log('Thumbnail URL:', thumbnailUrl);\
  \}, 3000); // Simulating a 3-second upload process\
\}\
}