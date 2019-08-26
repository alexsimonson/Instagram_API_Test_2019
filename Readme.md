<h1>Hashtag Image Viewer</h1>

<p>With this program, you can connect to my instagram account via their API and browse my images via an input hashtag</p>

<h2>How to use this application</h2>
<ol>
    <li>You will need to open this </li>
    <li>Enter a hashtag into the text input field</li>
    <li>Press the button or select from the drop down of hashtags to view an image</li>
    <li>(optional) you may change the access_token to your own account within the HashtagSelect.js file.  The variable is set on line 21.  If you need more information on how to retrieve this token, please follow the steps below or visit <a href='https://www.instagram.com/developer/authentication/'>Instagram's API Documentation</a></li>
</ol>

<h3>Retrieving your personal access_token</h3>
<ol>
    <li>Visit this <a href='https://api.instagram.com/oauth/authorize/?client_id=7df4ca60652b46839f848e3f36e04d98&redirect_uri=http://www.google.com&response_type=token'>link</a> and allow authentication with the Instagram API</li>
    <li>When that page redirects to google.com, their will be an access_token=(some characters) within the URL as a get parameter.  Copy the value of that get parameter and paste it into line 21 of the HashtagSelect.js file.  (see step 3 of how to use this application for more information)</li>
</ol>